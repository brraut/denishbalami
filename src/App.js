import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import SingleArticle from "./pages/SingleArticle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:slug" element={<SingleArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
