const { client } = require("../Setting/Db.config.js")
const bookType = require("../types/bookTypes.js")
const StatusCode = require("../util/http-status/http-status.js")

// GET /books
const GetBook = async (req, res) => {
  try {
    const { body } = await client.search({
      index: bookType.bookType,
      body: {
        query: {
          match_all: {}
        }
      }
    })
    res.status(StatusCode.OK).send(body.hits.hits.map((hit) => hit))
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ statusCode: StatusCode.INTERNAL_SERVER_ERROR, message: error.message, success: false, result: undefined })
  }
}

// GET /books/:id
const GetBookDetails = async (req, res) => {
  try {
    const { body } = await client.get({
      index: bookType.bookType,
      id: req.params.id
    })
    res.status(StatusCode.OK).send({ message: "success", data: body._source })
  } catch (error) {
    if (error.statusCode === 404) {
      res.status(StatusCode.NOT_FOUND).send({ message: "fail", error: "Book not found" })
    } else {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: "server error", error: error.message })
    }
  }
}

// POST /books
const PostBook = async (req, res) => {
  try {
    const { title, author, description, price } = req.body
    const timestamp = Date.now().toString()
    const { body } = await client.index({
      index: bookType.bookType,
      body: {
        id: timestamp,
        title,
        author,
        publishedDate: timestamp,
        description,
        price
      }
    })
    res.status(StatusCode.CREATED).send({ message: "success", data: body })
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: "server error", error: error.message })
  }
}

// PUT /books/:id
const UpdateBooks = async (req, res) => {
  try {
    const { title, author, description, price } = req.body
    const timestamp = Date.now().toString()
    const { body } = await client.update({
      index: bookType.bookType,
      id: req.params.id,
      body: {
        doc: {
          title,
          author,
          publishedDate: timestamp,
          description,
          price
        }
      }
    })
    res.status(StatusCode.OK).send({ message: "success", data: body })
  } catch (error) {
    if (error.statusCode === 404) {
      res.status(StatusCode.NOT_FOUND).send({ message: "Book not found" })
    } else {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: "fail", error })
    }
  }
}

module.exports = {
  GetBook,
  GetBookDetails,
  PostBook,
  UpdateBooks
}
