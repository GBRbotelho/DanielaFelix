import React, { useEffect } from "react";
import {
  Routes as Router,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Home/@Index";
import Blog from "./pages/Blog/@Index";
import Artigo from "./pages/Blog/Artigos/@Index";
import Parceiros from "./pages/Parceiros/@Index";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/artigo" element={<Artigo />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;
