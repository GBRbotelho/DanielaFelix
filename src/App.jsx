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
import Artigo1 from "./pages/Blog/Artigos/pages/Artigo1/@Index";
import Artigo2 from "./pages/Blog/Artigos/pages/Artigo2/@Index";
import Artigo3 from "./pages/Blog/Artigos/pages/Artigo3/@Index";
import Artigo4 from "./pages/Blog/Artigos/pages/Artigo4/@Index";
import Artigo5 from "./pages/Blog/Artigos/pages/Artigo5/@Index";
import Artigo6 from "./pages/Blog/Artigos/pages/Artigo6/@Index";
import Artigo7 from "./pages/Blog/Artigos/pages/Artigo7/@Index";
import Artigo8 from "./pages/Blog/Artigos/pages/Artigo8/@Index";
import Artigo9 from "./pages/Blog/Artigos/pages/Artigo9/@Index";
import Artigo10 from "./pages/Blog/Artigos/pages/Artigo10/@Index";
import Artigo11 from "./pages/Blog/Artigos/pages/Artigo11/@Index";
import Artigo12 from "./pages/Blog/Artigos/pages/Artigo12/@Index";
import Artigo13 from "./pages/Blog/Artigos/pages/Artigo13/@Index";
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
      <Route path="/blog/caminhando-juntos" element={<Artigo1 />} />
      <Route path="/blog/desvendando-o-autismo" element={<Artigo2 />} />
      <Route path="/blog/sussurros-noturnos" element={<Artigo3 />} />
      <Route
        path="/blog/explorando-os-aromas-da-serenidade"
        element={<Artigo4 />}
      />
      <Route path="/blog/18-de-maio" element={<Artigo5 />} />
      <Route path="/blog/o-papel-vital-do-farmaceutico" element={<Artigo6 />} />
      <Route path="/blog/daniela-felix" element={<Artigo7 />} />
      <Route path="/blog/setembro-amarelo" element={<Artigo8 />} />
      <Route path="/blog/casearia-sylvestris" element={<Artigo9 />} />
      <Route path="/blog/reconheca-os-sinais" element={<Artigo10 />} />
      <Route path="/blog/atencao-aos-sinais" element={<Artigo11 />} />
      <Route path="/blog/plantas-medicinais" element={<Artigo12 />} />
      <Route path="/blog/unha-de-gato" element={<Artigo13 />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  );
}

export default App;
