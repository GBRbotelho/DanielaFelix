import React from "react";
import styles from "./Section2Sobre.module.css";

export default function Section2Sobre() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Sobre a <span>consulta</span>
          </h1>
          <p>
            Descubra o{" "}
            <strong>Poder Curativo das Plantas e da Terapia Auricular</strong>,
            Guiados por uma Especialista{" "}
            <strong>Compassiva e Experiente</strong>. Seja Cara a Cara em Nosso
            Espaço Acolhedor ou Conectado Digitalmente{" "}
            <strong>de onde Estiver</strong>, Nossa{" "}
            <strong>Prioridade é Você</strong>. Converse Conosco, Conte suas
            Histórias e Deixe-nos Conhecer Você. Juntos, Desenvolveremos um
            Plano de <strong>Tratamento Personalizado</strong> que Honra sua
            Individualidade e Respeita seu Ritmo.{" "}
            <strong>Seja Bem-Vindo</strong> à Sua Própria História de
            Transformação e Bem-Estar.
          </p>
          <button>Agendar uma consulta</button>
        </div>
        <div className={styles.image}></div>
      </div>
    </section>
  );
}
