const { Client } = require("@elastic/elasticsearch")
const { DomainElecticSearch } = require("../util/setting")
const client = new Client({ node: DomainElecticSearch })

module.exports = {
  client
}
