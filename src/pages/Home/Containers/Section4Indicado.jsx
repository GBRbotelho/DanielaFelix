import React from "react";
import styles from "./Section4Indicado.module.css";

import image from "../../../assets/imgs/home/Section4Image.webp";

export default function Section4Indicado() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt="Imagem Ilustrativa" />
        </div>
        <div className={styles.content}>
          <h1>
            Pra <span>quem</span> é indicado<span>?</span>
          </h1>
          <p>
            A resposta é simples: <strong>Todos</strong>! A fitoterapia é uma{" "}
            <strong>aliada poderosa</strong> que atravessa todas as idades e
            está presente em todos os momentos da vida, desde o nascimento até a
            idade avançada. As plantas medicinais oferecem uma{" "}
            <strong>alternativa natural e segura</strong> para cuidar da saúde.
            Elas
            <strong>aliviam</strong> desconfortos, <strong>fortalecem</strong> a
            imunidade e promovem o <strong>bem-estar</strong>, sem efeitos
            colaterais indesejados. <strong>Experimente a fitoterapia</strong> e
            descubra como ela pode fazer a diferença para você e sua família!
          </p>
          <button>É isso que eu preciso</button>
        </div>
      </div>
    </section>
  );
}
