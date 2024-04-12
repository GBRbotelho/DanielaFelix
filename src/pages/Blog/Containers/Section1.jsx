import React from "react";
import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            <span>Bem vindo</span> ao mundo da fitoterapia
          </h1>
          <p>
            Bem-vindo ao nosso universo de bem-estar natural! De dicas práticas
            a informações científicas, oferecemos um guia completo sobre o uso
            de plantas medicinais para melhorar sua qualidade de vida.
          </p>
          <button>Ver tudo</button>
        </div>
        <div className={styles.image}></div>
      </div>
    </section>
  );
}
