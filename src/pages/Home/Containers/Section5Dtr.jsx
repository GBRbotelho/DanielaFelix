import React from "react";
import styles from "./Section5Dtr.module.css";

export default function Section5Dtr() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Ela vai te ajudar <br />
            <span>dra. Daniela</span>
          </h1>
          <p>
            Conheça a trajetória de excelência da Daniela Felix Fitoterapia: há
            18 anos, ela se dedica a oferecer soluções naturais para o
            bem-estar. Como uma especialista em terapias naturais, Dra. Daniela
            é sua parceira na busca pelo equilíbrio físico e mental. Com sua
            abordagem integrativa, que abrange desde a Fitoterapia Ocidental até
            a Fitoterapia Chinesa, passando pelos Florais de Bach, Homeopatia e
            Aromaterapia, ela oferece orientações personalizadas para cada
            necessidade. Seja para revitalizar suas manhãs, garantir um sono
            profundo ou enfrentar o estresse com tranquilidade, ela tem a chave
            para transformar seus desejos em realidade. Não perca tempo para
            começar sua jornada em direção ao bem-estar completo com a Daniela
            Felix Fitoterapia. Sua saúde natural começa aqui e agora.
          </p>
          <button>Agendar Agora</button>
        </div>
        <div className={styles.image}></div>
      </div>
    </section>
  );
}
