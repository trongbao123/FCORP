const fastify = require("fastify")()
const { HOST, PORT } = require("./config/config")
const routers = require("./router/RouterIndex")
const { seeBookData } = require("./seederData/seederDataBook")

routers(fastify)

fastify.listen({ port: PORT, host: HOST }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  } else {
    seeBookData()
  }
})
