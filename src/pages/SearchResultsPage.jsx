import { useSelector } from "react-redux";
import Grid from "../components/Grid";
import Box from "../components/layouts/Box";

export default function SearchResultsPage() {
  const queriedArticles = useSelector(
    (state) => state.articles.queriedArticles
  );

  if (!queriedArticles || queriedArticles.length === 0) {
    return <h1>No results found.</h1>;
  }
  return (
    <>
      <h1>Search Results</h1>
      <section className="container mx-auto pt-10 px-4 sm:px-6 md:px-12">
        <Grid>
          {queriedArticles.map(({ slug, description, _id, title, image }) => (
            <Box
              slug={slug.current}
              description={description}
              id={_id}
              key={_id}
              title={title}
              image={image}
            />
          ))}
        </Grid>
      </section>
    </>
  );
}
