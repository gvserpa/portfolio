import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Menu from "./components/menu/Menu.jsx";
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
