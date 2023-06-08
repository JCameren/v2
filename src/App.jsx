import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

export default function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      <Footer />
    </>
  );
}
