import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/10.webp";
import img2 from "../../../../../assets/imgs/fotos artigos/6.webp";
import img3 from "../../../../../assets/imgs/fotos artigos/2.webp";
import img4 from "../../../../../assets/imgs/fotos artigos/3.webp";

export default function Index() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.content}>
          <h1>
            <span>Reconheça os Sinais e Busque Ajuda: </span> O Papel do CAPS na
            Prevenção ao Suicídio
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Em meio às discussões sobre o Setembro Amarelo, é fundamental que
            cada um de nós se pergunte: "Quais são os sinais que podem indicar
            que alguém próximo, ou até mesmo eu, está em sofrimento emocional
            profundo?" Reconhecer esses sinais pode ser a chave para salvar
            vidas e oferecer o apoio necessário no momento certo.
            <br />
            <br />
            A ideação suicida, muitas vezes, se manifesta através de
            comportamentos e sentimentos que podem parecer sutis, mas que
            carregam um peso significativo. É importante estarmos atentos a
            sinais como:
            <br />
            <br />
            - Isolamento social: Quando alguém se afasta repentinamente de
            amigos, familiares e atividades que costumava gostar.
            <br />
            <br />
            - Mudanças bruscas de humor: Passar de um estado de profunda
            tristeza para um comportamento aparentemente tranquilo e sereno,
            pode indicar que a pessoa tomou uma decisão perigosa.
            <br />
            <br />
            - Expressões de desesperança: Comentários como "Nada mais importa",
            "Eu não vejo saída" ou "Eu sou um fardo" devem ser levados a sério.
            <br />
            <br />
            - Perda de interesse em coisas que antes eram importantes: Um
            desinteresse repentino por hobbies, trabalho ou relacionamentos pode
            ser um sinal de alerta.
            <br />
            <br />
            - Comportamentos autodestrutivos: Abuso de álcool, drogas ou
            comportamentos de risco aumentados podem ser formas de lidar com uma
            dor emocional intensa.
            <br />
            <br />
            Se você percebe esses sinais em si mesmo ou em alguém próximo, é
            fundamental buscar ajuda imediatamente. O SUS, através dos Centros
            de Atenção Psicossocial (CAPS), está de portas abertas para acolher
            e apoiar quem está passando por um momento difícil. Existem três
            tipos de CAPS, cada um especializado em diferentes necessidades:
            <br />
            <br />
            1. CAPS I: Atende pessoas com transtornos mentais graves e
            persistentes, oferecendo suporte e acompanhamento contínuo.
            <br />
            <br />
            2. CAPS II: Voltado para o atendimento de pessoas com transtornos
            mentais mais leves, proporcionando tratamento ambulatorial.
            <br />
            <br />
            3. CAPS III: Funciona 24 horas, incluindo fins de semana e feriados,
            oferecendo suporte intensivo para situações de crise.
            <br />
            <br />
            Nos CAPS, uma equipe multidisciplinar composta por psicólogos,
            psiquiatras, assistentes sociais, terapeutas ocupacionais,
            enfermeiros e farmacêuticos está preparada para oferecer um cuidado
            integral, humanizado e centrado na pessoa. Este é um espaço de
            acolhimento onde ninguém será julgado, mas sim apoiado e respeitado
            em sua singularidade.
            <br />
            <br />
            O farmacêutico, como parte dessa equipe, tem um papel crucial no
            cuidado com a saúde mental. Além de gerenciar a medicação,
            oferecemos orientações sobre o uso correto dos medicamentos e
            participamos ativamente da construção de estratégias terapêuticas
            personalizadas, que podem incluir o uso de Práticas Integrativas e
            Complementares em Saúde (PICS) como aromaterapia e florais de Bach,
            para promover o equilíbrio emocional.
            <br />
            <br />
            Nunca é tarde para pedir ajuda. O primeiro passo é reconhecer que o
            sofrimento não precisa ser enfrentado sozinho. O SUS está aqui para
            você, pronto para acolher, cuidar e ajudar a encontrar novos
            caminhos para uma vida com mais esperança e bem-estar.
            <br />
            <br />
            Com carinho e cuidado, <br />
            <br />
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
                  O Papel Vital do Farmacêutico e da Atenção Farmacêutica no
                  Cuidado em Saúde Mental
                </p>
                <Link to={"/blog/o-papel-vital-do-farmaceutico"}>
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
                  Desvendando o Autismo: O Caminho da Descoberta e Aceitação
                </p>
                <Link to={"/blog/desvendando-o-autismo"}>
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
                  Sussurros Noturnos: A Importância da Rotina do Sono no Autismo
                  e o Papel da Fitoterapia
                </p>
                <Link to={"/blog/sussurros-noturnos"}>
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
