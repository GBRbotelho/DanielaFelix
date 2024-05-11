import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/1.webp";
import img2 from "../../../../../assets/imgs/fotos artigos/2.webp";
import img3 from "../../../../../assets/imgs/fotos artigos/3.webp";
import img4 from "../../../../../assets/imgs/fotos artigos/4.webp";

export default function Index() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.content}>
          <h1>
            <span>Caminhando Juntos: </span> Explorando o Mundo do Autismo e
            Terapias Integrativas
          </h1>
          <p>
            Queridos leitores,
            <br />
            <br />É com grande alegria e entusiasmo que inauguro hoje o Blog da
            Dra. Daniela Felix, um espaço dedicado ao conhecimento, à saúde
            integral e à promoção do bem-estar. Como farmacêutica e apaixonada
            pelas terapias integrativas, meu objetivo é compartilhar informações
            valiosas que possam fazer a diferença na vida de cada um de vocês.{" "}
            <br />
            <br />
            Neste primeiro post, gostaria de abordar um tema de extrema
            importância: o autismo. O autismo, ou Transtorno do Espectro Autista
            (TEA), é uma condição complexa que afeta a maneira como uma pessoa
            se comunica, interage e percebe o mundo ao seu redor. Cada indivíduo
            com autismo é único, apresentando uma combinação única de
            características e desafios. <br />
            <br />
            Entre os principais sinais de alerta do autismo estão as
            dificuldades na comunicação verbal e não verbal, dificuldades nas
            interações sociais, padrões restritos e repetitivos de
            comportamento, interesses intensos e específicos, entre outros.
            Reconhecer esses sinais precocemente pode ser fundamental para
            garantir diagnósticos e intervenções adequados. <br />
            <br />É importante ressaltar que o autismo é um espectro, o que
            significa que existem diferentes graus de suporte necessários, desde
            quadros mais leves até casos mais severos. Independentemente do grau
            de suporte, cada pessoa com autismo merece respeito, compreensão e
            oportunidades para desenvolver seu potencial. <br />
            <br />
            Neste contexto, as Práticas Integrativas e Complementares em Saúde
            (PICS) desempenham um papel crucial. Terapias como a terapia
            ocupacional, fisioterapia, equoterapia, musicoterapia, entre outras,
            podem proporcionar benefícios significativos para pessoas com
            autismo, ajudando-as a desenvolver habilidades sociais, emocionais e
            físicas, e a ter uma vida com mais qualidade e bem-estar. <br />
            <br />
            Ao longo das próximas postagens, exploraremos mais a fundo cada uma
            dessas terapias, compartilhando dicas, orientações e histórias
            inspiradoras. Espero que este espaço se torne uma fonte de
            inspiração e apoio para todos aqueles que buscam compreender e
            promover a saúde e o bem-estar de pessoas com autismo. <br />
            <br />
            <br />
            Com carinho, <br />
            Dra. Daniela Felix
          </p>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </section>
        <aside>
          <div className={styles.image}>
            <img src={img} alt="Imagem Artigo" />
            <div className={styles.detalhe}></div>
          </div>
          <div className={styles.title}>
            <h1>RECOMENDAÇÕES</h1>
          </div>
          <div className={styles.recomendacoes}>
            <div className={styles.recomendacao}>
              <div className={styles.imageRec}>
                <img src={img2} alt="Imagem Artigo" />
              </div>
              <div className={styles.contentRec}>
                <p>
                  Desvendando o Autismo: O Caminho da Descoberta e Aceitação
                </p>
                <Link to={"/blog/desvendando-o-autismo"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </div>
            <div className={styles.recomendacao}>
              <div className={styles.imageRec}>
                <img src={img3} alt="Imagem Artigo" />
              </div>
              <div className={styles.contentRec}>
                <p>
                  Sussurros Noturnos: A Importância da Rotina do Sono no Autismo
                  e o Papel da Fitoterapia
                </p>
                <Link to={"/blog/sussurros-noturnos"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </div>
            <div className={styles.recomendacao}>
              <div className={styles.imageRec}>
                <img src={img4} alt="Imagem Artigo" />
              </div>
              <div className={styles.contentRec}>
                <p>
                  Explorando os Aromas da Serenidade: O Papel da Aromaterapia no
                  Cuidado com o Autismo
                </p>
                <Link to={"/blog/explorando-os-aromas-da-serenidade"}>
                  <button>Ler mais</button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
