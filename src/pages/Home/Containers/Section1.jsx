import React from "react";
import styles from "./Section1.module.css";
import Wpp from "../../../components/Home/Wpp";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>
          <span>Melhore sua Saúde</span>: Consultas de Fitoterapia e outras PICS
        </h1>
        <p>
          Explore o Poder das Plantas e da Acupuntura Auricular para Transformar
          sua Saúde e Bem-Estar, onde quer que você esteja!
        </p>
        <button>
          <Wpp /> Mais informações
        </button>
      </div>
    </section>
  );
}
