import React, { useEffect } from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section1 from "./Containers/Section1";
import Section2Sobre from "./Containers/Section2Sobre";
import Section3Servicos from "./Containers/Section3Servicos";
import Section4Indicado from "./Containers/Section4Indicado";
import Section5Dtr from "./Containers/Section5Dtr";
import Section6Pacientes from "./Containers/Section6Pacientes";
import Section7Perguntas from "./Containers/Section7Perguntas";

export default function Index() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Verifica se há um parâmetro na URL indicando que a rolagem até a seção do eBook deve ser acionada
    setTimeout(() => {
      const params = new URLSearchParams(location.search);
      if (params.get("scrollTo")) {
        scrollToSection(params.get("scrollTo"));
      }
    }, 200);
  }, [location.search]);

  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <Navbar />
        <Section1 />
      </div>
      <Section2Sobre />
      <Section3Servicos />
      <Section4Indicado />
      <Section5Dtr />
      <Section6Pacientes />
      <Section7Perguntas />
    </main>
  );
}
