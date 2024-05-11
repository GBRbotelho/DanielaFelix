import React from "react";
import styles from "./Section1.module.css";
import Geo from "../../../components/Parceiros/Geo";
import Profile from "../../../components/Parceiros/Profile";

import img1 from "../../../assets/imgs/fotos parceiros/EPICSAUDE-hortolandia.webp";
import img2 from "../../../assets/imgs/fotos parceiros/INSTITUTO-CULTURAL-POTALA-indaiatuba.webp";
import img3 from "../../../assets/imgs/fotos parceiros/COMUNIDADE-FENIX-hortolandia.webp";
import img4 from "../../../assets/imgs/fotos parceiros/BEIJA FLOR AROMAS florianopolis.webp";
import img5 from "../../../assets/imgs/fotos parceiros/CP-CLIN-Medicina-e-Saúde-hortolandia.webp";
import img6 from "../../../assets/imgs/fotos parceiros/BIOFARMA-hortolandia.webp";
import img7 from "../../../assets/imgs/fotos parceiros/PASSIFLORA-HORTOLÂNDIA.webp";
import img8 from "../../../assets/imgs/fotos parceiros/THAY MKT hortolandia.webp";
import img9 from "../../../assets/imgs/fotos parceiros/TV INTERAÇÃO São Paulo.webp";

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
            <div className={styles.image}>
              <img src={img1} alt="EPIC SAUDE" />
            </div>
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
            <div className={styles.image}>
              <img src={img2} alt="Instituto Potala" />
            </div>
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
            <div className={styles.image}>
              <img src={img3} alt="Comunidade Fênix" />
            </div>
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
            <div className={styles.image}>
              <img src={img4} alt="Beija Flor Aromas" />
            </div>
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
            <div className={styles.image}>
              <img src={img5} alt="CP Clin" />
            </div>
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
            <div className={styles.image}>
              <img src={img6} alt="BioFarma" />
            </div>
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
            <div className={styles.image}>
              <img src={img7} alt="Passiflora" />
            </div>
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
            <div className={styles.image}>
              <img src={img8} alt="Thay MKT" />
            </div>
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
            <div className={styles.image}>
              <img src={img9} alt="TV Interação" />
            </div>
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
