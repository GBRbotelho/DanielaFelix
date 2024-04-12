import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section1 from "./Containers/Section1";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Section1 />
    </main>
  );
}
