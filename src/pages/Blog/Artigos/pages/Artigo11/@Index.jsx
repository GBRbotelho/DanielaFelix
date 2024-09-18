import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/11.webp";
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
            <span>Atenção aos Sinais: </span> Prevenção ao Suicídio em Crianças
            e Adolescentes e o Papel do CAPS Infantil
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Quando falamos sobre prevenção ao suicídio, muitas vezes pensamos
            nos desafios enfrentados por adultos. No entanto, é essencial
            lembrar que crianças e adolescentes também podem ser profundamente
            afetados por sofrimentos emocionais que, em alguns casos, levam à
            ideação suicida. Neste Setembro Amarelo, convido todos a refletirem
            sobre a importância de estarmos atentos aos sinais e sintomas em
            nossos jovens e sobre o papel fundamental do CAPS Infantil nesse
            contexto.
            <br />
            <br />
            O mundo de uma criança ou adolescente pode ser tão complexo quanto o
            de um adulto, e as pressões sociais, escolares, familiares e
            pessoais podem pesar muito para eles. Mudanças bruscas de
            comportamento, isolamento, irritabilidade, tristeza persistente,
            queda no rendimento escolar, perda de interesse em atividades que
            antes eram prazerosas e comentários como "ninguém me entende" ou "eu
            gostaria de desaparecer" são sinais de alerta que não devem ser
            ignorados.
            <br />
            <br />
            A ideação suicida entre crianças e adolescentes pode ser difícil de
            detectar, pois muitas vezes eles não possuem as mesmas habilidades
            de comunicação que os adultos para expressar seus sentimentos e
            angústias. Além disso, fatores como bullying, conflitos familiares,
            abuso físico ou emocional, e até mesmo pressões acadêmicas podem
            contribuir para o desenvolvimento de pensamentos suicidas. É
            fundamental que pais, professores e cuidadores estejam vigilantes e
            prontos para agir ao menor sinal de que algo não está bem.
            <br />
            <br />
            É nesse contexto que o CAPS Infantil, também conhecido como CAPSi,
            desempenha um papel crucial. Este serviço especializado do SUS é
            dedicado ao atendimento de crianças e adolescentes em sofrimento
            psíquico. No CAPSi, a abordagem é sempre humanizada e acolhedora,
            oferecendo um espaço onde os jovens podem expressar seus sentimentos
            e receber o suporte necessário.
            <br />
            <br />
            O CAPSi conta com uma equipe multidisciplinar composta por
            psiquiatras, psicólogos, assistentes sociais, terapeutas
            ocupacionais, enfermeiros e farmacêuticos, todos trabalhando em
            conjunto para oferecer um cuidado integral e personalizado. Além de
            tratar os transtornos mentais, o CAPSi também atua na prevenção,
            identificando precocemente sinais de risco e desenvolvendo
            estratégias para promover a saúde mental e o bem-estar dos jovens.
            <br />
            <br />
            O farmacêutico, dentro do CAPSi, desempenha um papel fundamental no
            acompanhamento do tratamento medicamentoso dos jovens, orientando
            sobre o uso correto dos medicamentos e ajudando a família a
            compreender os efeitos e a importância da adesão ao tratamento. Além
            disso, o farmacêutico também pode integrar Práticas Integrativas e
            Complementares em Saúde (PICS), como a aromaterapia e os florais de
            Bach, para ajudar a aliviar o estresse e a ansiedade, proporcionando
            um cuidado mais amplo e humanizado.
            <br />
            <br />
            Proteger nossas crianças e adolescentes é uma responsabilidade
            coletiva. Ao reconhecermos os sinais e sintomas de sofrimento
            emocional, podemos oferecer o apoio necessário antes que o problema
            se agrave. Se você perceber algo diferente no comportamento de um
            jovem ao seu redor, não hesite em buscar ajuda. O CAPSi está de
            portas abertas para acolher e cuidar com toda a atenção que nossos
            pequenos merecem.
            <br />
            <br />
            Com carinho e dedicação, <br />
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
