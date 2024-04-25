import React from "react";
import styles from "./Section3Servicos.module.css";

import icon1 from "../../../assets/imgs/home/section3icon1.webp";
import icon2 from "../../../assets/imgs/home/section3icon2.webp";
import icon3 from "../../../assets/imgs/home/section3icon3.webp";
import icon4 from "../../../assets/imgs/home/section3icon4.webp";
import icon5 from "../../../assets/imgs/home/section3icon5.webp";

export default function Section3Servicos() {
  const href =
    "https://wa.me/5511981517956?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+conhecer+mais+sobre+seus+servi%C3%A7os%21";

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            Nossos <span>Serviços</span>
          </h1>
        </div>
        <div className={styles.services}>
          <div className={styles.services1}>
            <div className={styles.service}>
              <div className={styles.icon}>
                <img src={icon1} alt="Icone Fitoterapia" />
              </div>
              <h2>
                Fitoterapia
                <br />
                ocidental ou chinesa
              </h2>
              <p>
                Fitoterapia é uma técnica que estuda as funções terapêuticas das
                plantas e vegetais para prevenção e tratamento de doenças.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.icon}>
                <img src={icon2} alt="Aromaterapia" />
              </div>
              <h2>Aromaterapia</h2>
              <p>
                é uma terapia complementar 100% natural que utiliza óleos
                essenciais com o objetivo de melhorar o seu bem-estar físico e
                mental.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.icon}>
                <img src={icon3} alt="Florais de Bach" />
              </div>
              <h2>Florais de Bach</h2>
              <p>
                Os florais de Bach são compostos extraídos das flores. São
                indicados para tratar emoções e ajudar a equilibrar disfunções
                comportamentais e mentais.
              </p>
            </div>
          </div>
          <div className={styles.services2}>
            <div className={styles.service}>
              <div className={styles.icon}>
                <img src={icon4} alt="Homeopatia" />
              </div>
              <h2>Homeopatia</h2>
              <p>
                atua em diversas situações do adoecimento como nas doenças
                respiratórias e alérgicas, nos transtornos psicossomáticos,
                contribuindo para a melhoria de vida dos usuários.
              </p>
            </div>
            <div className={styles.service}>
              <div className={styles.icon}>
                <img src={icon5} alt="Acupuntura" />
              </div>
              <h2>Acupuntura</h2>
              <p>
                Equilibra o corpo, fortalece a imunidade e promove bem-estar
                físico e mental, reduzindo a necessidade de medicamentos e
                aumentando a eficácia do tratamento
              </p>
            </div>
          </div>
        </div>
        <a href={href} target="_blank">
          <button>Comece sua Jornada para uma Saúde Natural!</button>
        </a>
      </div>
    </section>
  );
}
