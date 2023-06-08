const { createClient } = require("@sanity/client")

module.exports = createClient({
  projectId: process.env.PROJECTID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2023-05-03',
  useCdn: true
});