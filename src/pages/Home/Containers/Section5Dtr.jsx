import React from "react";
import styles from "./Section5Dtr.module.css";

import image from "../../../assets/imgs/home/section5ImagemDoutora.webp";

export default function Section5Dtr() {
  const href =
    "https://wa.me/5511981517956?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+conhecer+mais+sobre+seus+servi%C3%A7os%21";

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
          <a href={href} target="_blank">
            <button>Agendar Agora</button>
          </a>
        </div>
        <div className={styles.image}>
          <img src={image} alt="Imagem Ilustrativa" />
        </div>
      </div>
    </section>
  );
}
