import React from "react";
import styles from "./Section3Servicos.module.css";

export default function Section3Servicos() {
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
              <div className={styles.icon}></div>
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
              <div className={styles.icon}></div>
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
              <div className={styles.icon}></div>
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
          </div>
          <div className={styles.services2}>
            <div className={styles.service}>
              <div className={styles.icon}></div>
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
              <div className={styles.icon}></div>
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
          </div>
        </div>
        <button>Comece sua Jornada para uma Saúde Natural!</button>
      </div>
    </section>
  );
}
