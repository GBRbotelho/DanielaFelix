import React from "react";
import styles from "./Section1.module.css";
import image from "../../../assets/imgs/blog/section1.webp";

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
        </div>
        <div className={styles.image}>
          <img src={image} alt="Imagem Doutora" />
          <div className={styles.detalhe}></div>
        </div>
      </div>
    </section>
  );
}
