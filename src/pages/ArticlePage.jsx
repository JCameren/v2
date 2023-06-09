import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { show } from "../store/articles/thunks";

export default function ArticlePage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.singleArticle);
  const { title } = article[0];

  useEffect(() => {
    dispatch(show(slug));
  }, [dispatch, slug]);

  return <h1>{title}</h1>;
}
