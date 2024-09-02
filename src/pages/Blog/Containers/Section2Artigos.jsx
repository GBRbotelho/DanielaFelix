import React, { useEffect, useState } from "react";
import styles from "./Section2Artigos.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

import img1 from "../../../assets/imgs/fotos artigos/1.webp";
import img2 from "../../../assets/imgs/fotos artigos/2.webp";
import img3 from "../../../assets/imgs/fotos artigos/3.webp";
import img4 from "../../../assets/imgs/fotos artigos/4.webp";
import img5 from "../../../assets/imgs/fotos artigos/5.webp";
import img6 from "../../../assets/imgs/fotos artigos/6.webp";
import img7 from "../../../assets/imgs/fotos artigos/7.webp";

export default function Section2Artigos() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Nossos <span>artigos</span>
          </h1>
        </div>
        <div className={styles.cards}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            spaceBetween="2%"
            slidesPerView={
              (windowWidth > 1000 && 4) ||
              (windowWidth > 650 && windowWidth <= 1000 && 3) ||
              (windowWidth > 400 && windowWidth <= 650 && 2) ||
              (windowWidth <= 400 && 1)
            }
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide className={styles.swiperCard}>
              <div className={`${styles.card} ${styles.first}`}>
                <div className={styles.image}>
                  <img src={img7} alt="Caminhando Juntos" />
                </div>
                <p>
                Daniela Felix: Uma Vida Dedicada à Fitoterapia e ao Amor pela Natureza
                </p>
                <Link to={"/blog/daniela-felix"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={`${styles.card} ${styles.first}`}>
                <div className={styles.image}>
                  <img src={img6} alt="Caminhando Juntos" />
                </div>
                <p>
                  O Papel Vital do Farmacêutico e da Atenção Farmacêutica no
                  Cuidado em Saúde Mental
                </p>
                <Link to={"/blog/o-papel-vital-do-farmaceutico"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={`${styles.card} ${styles.first}`}>
                <div className={styles.image}>
                  <img src={img5} alt="Caminhando Juntos" />
                </div>
                <p>18 de Maio: Unindo Forças na Luta Antimanicomial</p>
                <Link to={"/blog/18-de-maio"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={`${styles.card} ${styles.first}`}>
                <div className={styles.image}>
                  <img src={img1} alt="Caminhando Juntos" />
                </div>
                <p>
                  Caminhando Juntos: Explorando o Mundo do Autismo e Terapias
                  Integrativas
                </p>
                <Link to={"/blog/caminhando-juntos"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={img2} alt="Desvendando o Autismo" />
                </div>
                <p>
                  Desvendando o Autismo: O Caminho da Descoberta e Aceitação
                </p>
                <Link to={"/blog/desvendando-o-autismo"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={img3} alt="Sussurros Noturnos" />
                </div>
                <p>
                  Sussurros Noturnos: A Importância da Rotina do Sono no Autismo
                  e o Papel da Fitoterapia
                </p>
                <Link to={"/blog/sussurros-noturnos"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCard}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={img4} alt="Explorando os Aromas da Serenidade" />
                </div>
                <p>
                  Explorando os Aromas da Serenidade: O Papel da Aromaterapia no
                  Cuidado com o Autismo
                </p>
                <Link to={"/blog/explorando-os-aromas-da-serenidade"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
