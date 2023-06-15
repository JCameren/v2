const client = require("../../sanityio/client");

const index = async (req, res) => {
  const articles = await client.fetch(`*[_type == "article"]`);
  res.json(articles);
};

const show = async (req, res) => {
  const article = await client.fetch(
    `*[_type == "article" && slug.current == "${req.params.slug}"]`
  );
  res.json(article);
};

const search = async (req, res) => {
  const matchingQueries = await client.fetch(`*[_type == "article" && (title == "${req.params.query}" || title match "${req.params.query}")]`)
  res.json(matchingQueries)
}

module.exports = {
  index,
  show,
  search
};
