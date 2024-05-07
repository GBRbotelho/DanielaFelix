import React from "react";
import styles from "./Section1.module.css";
import Geo from "../../../components/Parceiros/Geo";
import Profile from "../../../components/Parceiros/Profile";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Nossos <span>parceiros</span>
          </h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Epic Saúde
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="http://peliasfil.wixsite.com/acupuntura" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Instituto Potala
              </li>
              <li>
                <Geo />
                Indaiatuba - SP
              </li>
            </ul>
            <a href="http://www.institutopotala.com/" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Comunidade Fênix
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="http://go.hotmart.com/X86080020K" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Beija Flor Aromas
              </li>
              <li>
                <Geo /> Hortolândia - SP
              </li>
            </ul>
            <a href="https://beijafloraromas.com/" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                CP Clin
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a
              href="https://www.instagram.com/cp_clin_aluguel_consultorios/"
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
                BioFarma
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://wa.me/5519994020059" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Passiflora Hortolândia
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://www.farmaciapassiflora.com.br/" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Thay MKT
              </li>
              <li>
                <Geo />
                Hortolândia - SP
              </li>
            </ul>
            <a href="https://bio.site/thay.MKT" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                TV Interação
              </li>
              <li>
                <Geo />
                Morumbi - SP
              </li>
            </ul>
            <a href="http://www.interacao.com.br/" target="_blank">
              <button>Conhecer</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
