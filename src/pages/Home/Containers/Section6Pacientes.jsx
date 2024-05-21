import React, { useEffect, useState } from "react";
import styles from "./Section6Pacientes.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import Star from "../../../components/Home/Star";
import profile from "../../../assets/imgs/home/section6ImageProfile.webp";
import aspas from "../../../assets/imgs/home/section6ImageAspas.webp";

export default function Section6Pacientes() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  const href =
    "https://wa.me/5511981517956?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+conhecer+mais+sobre+seus+servi%C3%A7os%21";

  return (
    <section className={styles.section} id="clientes">
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
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween="2%"
              slidesPerView={
                (windowWidth > 700 && 3) ||
                (windowWidth > 500 && windowWidth <= 700 && 2) ||
                (windowWidth > 0 && windowWidth <= 500 && 1)
              }
              pagination={{ clickable: true }}
              loop={true}
              navigation={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Excelente e diferenciada profissional da saúde holística,
                    ministra cursos de alto nível e faz atendimentos presenciais
                    e online! Um privilégio tê-la como parte do quadro de
                    colaboradores do Instituto Potala!
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #1</h1>
                      <p>Soraya Sartoran</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Dra Daniela é incrível! Direta, objetiva, avalia a
                    totalidade do ser e seu contexto, explica o que significa o
                    resultado dos exames e relaciona com os sintomas descritos.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #2</h1>
                      <p>Elaine Fatima Carbonari Pereira</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Adorei a consulta com a Dra. Daniela. Muito competente! Tem
                    o dom da escuta e o tratamento é super eficiente. Que
                    maravilha a consulta ser online pois sou de outra cidade.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #3</h1>
                      <p>Debora Correa</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Amei o atendimento, a Doutora Daniela é super atenciosa, bem
                    explicativa, ela tem interesse a necessidade de cada
                    cliente, de longe da pra ver que ela ama o que faz, ela não
                    só atende com experiência, mas também com o coração.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #4</h1>
                      <p>Jaqueline Meireles</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Atendimento espetacular! Superou todas as minhas
                    expectativas! Super recomendo! Profissional extremamente
                    dedicada, com grande expertise na área da Saúde.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #5</h1>
                      <p>Juliana Candido</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Profissional muito competente, explica tudo para o paciente.
                    Gostei muito e realmente a fitoterapia tem me ajudado a
                    solução de meus problemas.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #6</h1>
                      <p>Sabrine Gomes</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Uma ótima profissional, cuidado com carinho e atenção,
                    tratou a família inteira. Recomendo.
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #7</h1>
                      <p>Paula Andrea</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p>
                    Profissional incrível!!! Obrigada por toda sua atenção e
                    conhecimento
                  </p>
                  <div className={styles.dataUser}>
                    <div className={styles.profile}>
                      <img src={profile} alt="Icone Perfil" />
                    </div>
                    <div className={styles.dataProfile}>
                      <h1>Testemunho #8</h1>
                      <p>Inara Merique</p>
                    </div>
                    <div className={styles.iconUser}>
                      <img src={aspas} alt="Icone Aspas" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <a href={href} target="_blank">
          <button>Me tornar paciente</button>
        </a>
      </div>
    </section>
  );
}
