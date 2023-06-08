import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { index } from "../store/articles/thunks";
import Grid from "../components/Grid/index";
import Box from "../components/layouts/Box";

export default function HomePage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.allArticles);

  useEffect(() => {
    dispatch(index());
  }, [dispatch]);

  useEffect(() => {
    console.log(articles);
  }, [articles]);
  return (
    <section className="container mx-auto pt-10 px-4 sm:px-6 md:px-12">
      <Grid>
        {articles.map(({ slug, description, _id, title, image }) => (
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
  );
}
