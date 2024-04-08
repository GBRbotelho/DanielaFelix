import React from "react";
import styles from "./Section6Pacientes.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Section6Pacientes() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.data}>
            <h1>
              <span>Avaliação dos</span>
              <br />
              Nossos Pacientes
            </h1>
            <p>
              Essas são as pessoas que tiveram suas vidas mudadas pelo
              conhecimento obtido no curso, seja para trilhar uma carreira na
              fitoterapia ou para cuidar da saude de sua familia!
            </p>
          </div>
          <div className={styles.cards}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween="2%"
              slidesPerView={3}
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}></div>
                  <p>
                    Dra Daniela é incrível! Direta, objetiva, avalia a
                    totalidade do ser e seu contexto, explica o que significa o
                    resultado dos exames e relaciona com os sintomas descritos.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}></div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #1</h1>
                      <p>Elaine Fatima Carbonari Pereira</p>
                    </div>
                    <div className={styles.iconUser}></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}></div>
                  <p>
                    Dra Daniela é incrível! Direta, objetiva, avalia a
                    totalidade do ser e seu contexto, explica o que significa o
                    resultado dos exames e relaciona com os sintomas descritos.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}></div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #1</h1>
                      <p>Elaine Fatima Carbonari Pereira</p>
                    </div>
                    <div className={styles.iconUser}></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}></div>
                  <p>
                    Dra Daniela é incrível! Direta, objetiva, avalia a
                    totalidade do ser e seu contexto, explica o que significa o
                    resultado dos exames e relaciona com os sintomas descritos.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}></div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #1</h1>
                      <p>Elaine Fatima Carbonari Pereira</p>
                    </div>
                    <div className={styles.iconUser}></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}></div>
                  <p>
                    Dra Daniela é incrível! Direta, objetiva, avalia a
                    totalidade do ser e seu contexto, explica o que significa o
                    resultado dos exames e relaciona com os sintomas descritos.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}></div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #1</h1>
                      <p>Elaine Fatima Carbonari Pereira</p>
                    </div>
                    <div className={styles.iconUser}></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}></div>
                  <p>
                    Dra Daniela é incrível! Direta, objetiva, avalia a
                    totalidade do ser e seu contexto, explica o que significa o
                    resultado dos exames e relaciona com os sintomas descritos.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}></div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #1</h1>
                      <p>Elaine Fatima Carbonari Pereira</p>
                    </div>
                    <div className={styles.iconUser}></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <button>Me tornar paciente</button>
      </div>
    </section>
  );
}
