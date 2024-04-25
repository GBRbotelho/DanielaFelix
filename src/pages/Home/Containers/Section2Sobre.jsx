import React from "react";
import styles from "./Section2Sobre.module.css";

import img from "../../../assets/imgs/home/imageSection1.webp";

export default function Section2Sobre() {
  const href =
    "https://wa.me/5511981517956?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+conhecer+mais+sobre+seus+servi%C3%A7os%21";

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
          <a href={href} target="_blank">
            <button>Agendar uma consulta</button>
          </a>
        </div>
        <div className={styles.image}>
          <img src={img} alt="Ilustração" />
        </div>
      </div>
    </section>
  );
}
