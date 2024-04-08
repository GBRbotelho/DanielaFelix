import React from "react";
import styles from "./Section7Perguntas.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Section7Perguntas() {
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
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ebook}>
          <div className={styles.cards}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween="10%"
              slidesPerView={1.7}
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <h1>Primeiros passos na fitoterapia</h1>
                    <div className={styles.iconBook}></div>
                    <ul>
                      <li>Totalmente online</li>
                      <li>Leitura facil e didatico</li>
                      <li>Resultado pro resto da vida</li>
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
