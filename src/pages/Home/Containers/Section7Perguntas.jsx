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

import pdf from "../../../assets/docs/Amostra Grátis - GUIA Como usar 30 plantas ocidentais da Medicina Chinesa.pdf";

export default function Section7Perguntas() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [question, setQuestion] = useState(null);

  const handleDownload = () => {
    // Cria um link temporário para iniciar o download
    const downloadLink = document.createElement("a");
    downloadLink.href = pdf;
    downloadLink.download =
      "Amostra Grátis - GUIA Como usar 30 plantas ocidentais da Medicina Chinesa.pdf";

    // Adiciona o link temporário ao documento e clica nele
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove o link temporário do documento
    document.body.removeChild(downloadLink);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  const handleClick = (number) => {
    if (question === number) {
      setQuestion(null);
    } else {
      setQuestion(number);
    }
  };

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
                <div className={styles.questao}>
                  <p>As consultas possuem pagamentos mensais ou avulsos?</p>
                  <Plus click={() => handleClick(1)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 1 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    As consultas possuem pagamentos avulsos com retorno em 15
                    dias (via WhatsApp para ajuste de dosagem, se for o caso) e
                    retorno para avaliação de resultados em 35 a 40 dias (com
                    novo pagamento).
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Quais são as formas de pagamento?</p>
                  <Plus click={() => handleClick(2)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 2 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    Pix, Dinheiro, Débito e Crédito a vista (sem taxa) ou em 2x
                    com taxa.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>
                    Posso mudar a modalidade das consultas presenciais ou online
                    a qualquer momento?
                  </p>
                  <Plus click={() => handleClick(3)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 3 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    Estando na cidade de Hortolândia e em breve em Americana
                    sim. Sendo da cidade de Indaiatuba consulte os dias de
                    atendimento no Instituto Potala. As demais cidades somente
                    online.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Pode ser feito mais de um serviço em uma sessão?</p>
                  <Plus click={() => handleClick(4)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 4 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    Durante a consulta seja online ou presencial serão
                    utilizadas as técnicas necessárias para o melhor
                    restabelecimento da saúde do interagente. Seja Fitoterapia
                    Ocidental ou Chinesa, Aromaterapia, Florais de Bach e/ou
                    Homeopatia. E em alguns casos utilizamos a associação entre
                    as técnicas.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>
                    Como a Fitoterapia pode auxiliar no restabelecimento da
                    minha saúde ou da minha família?
                  </p>
                  <Plus click={() => handleClick(5)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 5 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    A Fitoterapia oferece uma abordagem natural e eficaz para o
                    restabelecimento da saúde de você e sua família. Por meio do
                    uso de plantas medicinais e fitoterápicos, a Fitoterapia
                    atua no organismo de forma holística, auxiliando no
                    tratamento de diversas condições de saúde, desde problemas
                    digestivos até distúrbios do sono. Além disso, os
                    fitoterápicos podem ser utilizados de forma preventiva,
                    fortalecendo o sistema imunológico e promovendo um estilo de
                    vida mais saudável. Agende uma consulta com a Dra. Daniela e
                    descubra como a Fitoterapia pode ser um aliado poderoso para
                    o bem-estar de toda a família.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Qual a faixa etária para o atendimento com as PICS?</p>
                  <Plus click={() => handleClick(6)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 6 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    As Práticas Integrativas e Complementares em Saúde (PICS)
                    são acessíveis e benéficas para todas as faixas etárias,
                    desde bebês até idosos. Não há restrição específica de idade
                    para o atendimento com PICS, pois essas terapias visam
                    promover o equilíbrio e o bem-estar de forma holística em
                    qualquer fase da vida. Portanto, crianças, adolescentes,
                    adultos e idosos podem se beneficiar do cuidado integrativo
                    oferecido pelas PICS, sob orientação de profissionais
                    qualificados como a Dra. Daniela.
                  </p>
                </div>
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
                    <h1>
                      Como usar 30 plantas ocidentais na Medicina Chinesa -
                      Amostra Gratis
                    </h1>
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
                  <button onClick={handleDownload}>Quero ter meu acesso</button>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <h1>Fitoterapia e Plantas no Cuidado Feminino</h1>
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
                        De <del>93,00</del>
                      </p>
                      <p>
                        Por <span>73,00</span>
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://pay.hotmart.com/Y39809741M?checkoutMode=10&bid=1714243149035"
                    target="_blank"
                  >
                    <button>Quero ter meu acesso</button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <h1>Como usar 30 plantas ocidentais na Medicina Chinesa</h1>
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
                        De <del>89,90</del>
                      </p>
                      <p>
                        Por <span>69,90</span>
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://pay.hotmart.com/S48950640C?off=zr1dht5o&bid=1714243206322"
                    target="_blank"
                  >
                    <button>Quero ter meu acesso</button>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
