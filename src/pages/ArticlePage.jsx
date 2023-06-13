import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { show } from "../store/articles/thunks";

export default function ArticlePage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.singleArticle);

  useEffect(() => {
    dispatch(show(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    console.log(article, "article specified");
  }, [article]);

  if (!article) {
    return <h1>Loading...</h1>
  }

  return (
    <h1>{article[0].title}</h1>
  );
}
