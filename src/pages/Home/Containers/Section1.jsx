import React from "react";
import styles from "./Section1.module.css";
import Wpp from "../../../components/Home/Wpp";

export default function Section1() {
  const href =
    "https://wa.me/5511981517956?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+conhecer+mais+sobre+seus+servi%C3%A7os%21";

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>
          <span>Melhore sua Saúde</span>: Consultas de Fitoterapia e outras PICS
        </h1>
        <p>
          Explore o Poder das Plantas e das Práticas Integrativas e
          Complementares em Saúde para transformar sua Saúde e Bem-Estar, onde
          quer que você esteja!
        </p>
        <a href={href} target="_blank">
          <button>
            <Wpp /> Mais informações
          </button>
        </a>
      </div>
    </section>
  );
}
