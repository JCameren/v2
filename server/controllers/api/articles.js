const client = require("../../sanityio/client")

const index = async (req, res) => {
    const projects = await client.fetch(`*[_type == "article"]`)
    res.json(projects)
}

const show = async (req, res) => {
    return null
}

module.exports = {
    index,
    show
}