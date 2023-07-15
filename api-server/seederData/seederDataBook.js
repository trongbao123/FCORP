const bookType = require("../types/bookTypes.js")
const bookData = require("../Data/books.json")
const { client } = require("../Setting/Db.config.js")

const seeBookData = async () => {
  try {
    const { body: exists } = await client.indices.exists({
      index: bookType.bookType
    })
    if (!exists) {
      await client.indices.create({
        index: bookType.bookType,
        body: {
          mappings: {
            properties: {
              id: { type: "keyword" },
              title: { type: "text" },
              author: { type: "text" },
              publishedDate: { type: "date" },
              description: { type: "text" },
              price: { type: "float" }
            }
          }
        }
      })
    }

    const { body: count } = await client.count({ index: bookType.bookType })
    if (count.count > 0) return

    const body = bookData.flatMap((book) => [{ index: { _index: bookType.bookType } }, book])
    await client.bulk({ refresh: true, body })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  seeBookData
}
