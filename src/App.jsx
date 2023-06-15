import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

export default function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/articles" element={<SearchResultsPage />} />
        </Routes>
      <Footer />
    </>
  );
}
