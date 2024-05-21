import React from "react";
import styles from "./Section1.module.css";
import Geo from "../../../components/Parceiros/Geo";
import Profile from "../../../components/Parceiros/Profile";

//Recomendo
import img10 from "../../../assets/imgs/fotos parceiros/FATCAT BEER Cássia dos Coqueiros sp.webp";
import img11 from "../../../assets/imgs/fotos parceiros/LEVE SUMMER loja virtual.webp";
import img12 from "../../../assets/imgs/fotos parceiros/JC COMUNICAÇÃO VISUAL sao paulo.webp";
import img13 from "../../../assets/imgs/fotos parceiros/ESPAÇO DE TERAPIAS JOÃO DO BARRO Prudentópolis PR.webp";
import img14 from "../../../assets/imgs/fotos parceiros/DOCES DA NESSA hortolandia.webp";
import img15 from "../../../assets/imgs/fotos parceiros/KIBÃO BURGUER hortolandia.webp";
import img16 from "../../../assets/imgs/fotos parceiros/CAFE TELLURE hortolandia.webp";
import img17 from "../../../assets/imgs/fotos parceiros/DIVINA FLORA Chapecó SC.webp";
import img18 from "../../../assets/imgs/fotos parceiros/EDITORA INSERIR sao paulo.webp";

export default function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Gosto e <span>recomendo</span>
          </h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img10} alt="FatCat Beer" />
            </div>
            <ul>
              <li>
                <Profile />
                Fatcat Beer
              </li>
              <li>
                <Geo />
                Cássia dos Coqueiros - SP
              </li>
            </ul>
            <a href="https://fatcatbeer.com.br/links" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img11} alt="Leve Summer" />
            </div>
            <ul>
              <li>
                <Profile />
                Leve Summer
              </li>
              <li>
                <Geo />
                Loja Online
              </li>
            </ul>
            <a href="https://wa.me/5561994252335" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img12} alt="JC Comunicação Visual" />
            </div>
            <ul>
              <li>
                <Profile />
                JC Comunicação Visual
              </li>
              <li>
                <Geo />
                São Paulo - SP
              </li>
            </ul>
            <a href="https://wa.me/5511940242315" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img13} alt="João de Barro" />
            </div>
            <ul>
              <li>
                <Profile />
                Jõao do Barro
              </li>
              <li>
                <Geo />
                Prudentópolis – PR
              </li>
            </ul>
            <a
              href="https://www.instagram.com/loja_joaodobarro/"
              target="_blank"
            >
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img14} alt="Doces Nessa" />
            </div>
            <ul>
              <li>
                <Profile />
                Doces da Nessa
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://linklist.bio/Docesdanessa" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img15} alt="Ki-Bão Burguer" />
            </div>
            <ul>
              <li>
                <Profile />
                Ki-Bão Burguer
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://www.instagram.com/kibaoburguer" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img16} alt="Café Tellure" />
            </div>
            <ul>
              <li>
                <Profile />
                Café Tellure
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://www.instagram.com/cafetellure/" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img17} alt="Divina Flora" />
            </div>
            <ul>
              <li>
                <Profile />
                Divina Flora
              </li>
              <li>
                <Geo />
                Chapeco – SC
              </li>
            </ul>
            <a href="https://wa.me/5549999497765" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={img18} alt="Editora Inserir" />
            </div>
            <ul>
              <li>
                <Profile />
                Editora Inserir
              </li>
              <li>
                <Geo />
                São Paulo – SP
              </li>
            </ul>
            <a href="https://www.instagram.com/editorainserir" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
