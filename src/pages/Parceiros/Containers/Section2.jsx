import React from "react";
import styles from "./Section1.module.css";
import Geo from "../../../components/Parceiros/Geo";
import Profile from "../../../components/Parceiros/Profile";

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
            <div className={styles.image}></div>
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
            <div className={styles.image}></div>
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
            <div className={styles.image}></div>
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
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Jõao do Barro
              </li>
              <li>
                <Geo />- SP
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
            <div className={styles.image}></div>
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
            <div className={styles.image}></div>
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
            <div className={styles.image}></div>
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
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Divina Flora
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://wa.me/5549999497765" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Editora Inserir
              </li>
              <li>
                <Geo />
                Hortolândia - SP
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
