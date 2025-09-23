import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Menu from "./components/menu/Menu.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./pages/about/About.jsx";
import ScrollToTop from "./components/scroll/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
