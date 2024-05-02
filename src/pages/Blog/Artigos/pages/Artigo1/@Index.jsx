import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate } from "react-router-dom";

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
            <div className={styles.detalhe}></div>
          </div>
          <div className={styles.title}>
            <h1>RECOMENDAÇÕES</h1>
          </div>
          <div className={styles.recomendacoes}>
            <div className={styles.recomendacao}>
              <div className={styles.imageRec}></div>
              <div className={styles.contentRec}>
                <p>
                  Bem-vindo ao nosso universo de bem-estar natural! De dicas
                  práticas a informações científicas
                </p>
                <button>Ler mais</button>
              </div>
            </div>
            <div className={styles.recomendacao}>
              <div className={styles.imageRec}></div>
              <div className={styles.contentRec}>
                <p>
                  Bem-vindo ao nosso universo de bem-estar natural! De dicas
                  práticas a informações científicas
                </p>
                <button>Ler mais</button>
              </div>
            </div>
            <div className={styles.recomendacao}>
              <div className={styles.imageRec}></div>
              <div className={styles.contentRec}>
                <p>
                  Bem-vindo ao nosso universo de bem-estar natural! De dicas
                  práticas a informações científicas
                </p>
                <button>Ler mais</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
