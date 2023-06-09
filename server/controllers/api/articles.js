const client = require("../../sanityio/client")

const index = async (req, res) => {
    const articles = await client.fetch(`*[_type == "article"]`)
    res.json(articles)
}

const show = async (req, res) => {
    return null
}

module.exports = {
    index,
    show
}