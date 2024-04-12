import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section1 from "./Containers/Section1";
import Section2Artigos from "./Containers/Section2Artigos";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Section1 />
      <Section2Artigos />
    </main>
  );
}
