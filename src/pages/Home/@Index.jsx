import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section1 from "./Containers/Section1";
import Section2Sobre from "./Containers/Section2Sobre";
import Section3Servicos from "./Containers/Section3Servicos";
import Section4Indicado from "./Containers/Section4Indicado";
import Section5Dtr from "./Containers/Section5Dtr";

export default function Index() {
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
    </main>
  );
}
