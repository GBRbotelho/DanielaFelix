import React, { useEffect, useState } from "react";
import styles from "./Section7Perguntas.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Plus from "../../../components/Home/Plus";

import Book from "../../../assets/imgs/home/section7iconBook.webp";
import Ok from "../../../components/Home/Ok";

export default function Section7Perguntas() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.promocao}>
            <h1>
              Promoção por tempo <span>limitado</span>
            </h1>
            <p>Comece a aprender ainda hoje!</p>
          </div>
          <div className={styles.perguntas}>
            <h1>Perguntas frequentes</h1>
            <ul>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ebook} id="ebook">
          <div className={styles.cards}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween="10%"
              slidesPerView={
                (windowWidth > 1000 && 1.7) ||
                (windowWidth > 0 && windowWidth <= 1000 && 1)
              }
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <h1>Primeiros passos na fitoterapia</h1>
                    <div className={styles.iconBook}>
                      <img src={Book} alt="Icone Livro" />
                    </div>
                    <ul>
                      <li>
                        <Ok /> Totalmente online
                      </li>
                      <li>
                        <Ok />
                        Leitura facil e didatico
                      </li>
                      <li>
                        <Ok />
                        Resultado pro resto da vida
                      </li>
                    </ul>
                    <div className={styles.preco}>
                      <p>
                        De <del>69,99</del>
                      </p>
                      <p>
                        Por <span>gratis</span>
                      </p>
                    </div>
                  </div>
                  <button>Quero ter meu acesso</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
