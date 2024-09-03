import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/8.webp";
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
            <span>Setembro Amarelo: </span> revenção ao Suicídio e o Papel das
            PICS e do CAPS no Cuidado Integral
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Setembro é o mês em que voltamos nossos olhos e corações para uma
            causa urgente e fundamental: a prevenção ao suicídio. O Setembro
            Amarelo, como é conhecido, é uma campanha de conscientização que tem
            como objetivo trazer luz a um tema muitas vezes cercado por silêncio
            e estigma, mas que precisa ser discutido abertamente para salvar
            vidas.
            <br />
            <br />
            A origem do Setembro Amarelo remonta a 1994, quando nos Estados
            Unidos, o jovem Mike Emme, de apenas 17 anos, tirou sua própria
            vida. Mike era conhecido por seu Mustang 1968 amarelo, um carro que
            ele mesmo restaurou e que, depois de sua morte, tornou-se um símbolo
            da campanha de prevenção ao suicídio. Em seu funeral, seus amigos e
            familiares distribuíram cartões com fitas amarelas e a mensagem "Se
            você precisar, peça ajuda". Desde então, o amarelo tornou-se a cor
            símbolo da campanha mundial de prevenção ao suicídio.
            <br />
            <br />
            Aqui no Brasil, o Setembro Amarelo é uma oportunidade para lembrar a
            todos da importância de estar atento aos sinais de quem pode estar
            passando por um sofrimento emocional profundo e de oferecer apoio e
            acolhimento. A campanha busca sensibilizar a sociedade para a
            gravidade do problema e incentivar a busca por ajuda.
            <br />
            <br />
            Nesse contexto, as Práticas Integrativas e Complementares em Saúde
            (PICS) desempenham um papel importante na prevenção e no cuidado de
            pessoas em sofrimento emocional. A aromaterapia, por exemplo,
            utiliza óleos essenciais que podem ajudar a promover o relaxamento,
            reduzir a ansiedade e melhorar o bem-estar emocional. Óleos como
            lavanda e bergamota são conhecidos por suas propriedades calmantes,
            podendo ser aliados no manejo do estresse e da angústia.
            <br />
            <br />
            Os Florais de Bach, por sua vez, são essências florais que trabalham
            as emoções de forma sutil, auxiliando na harmonização do estado
            emocional. Eles podem ser utilizados para apoiar pessoas que
            enfrentam sentimentos de desesperança, medo ou tristeza profunda,
            contribuindo para a recuperação do equilíbrio emocional.
            <br />
            <br />
            No CAPS Adulto e no CAPS Álcool e Drogas, onde tenho a honra de
            atuar como farmacêutica em equipe multidisciplinar, o trabalho de
            prevenção e recuperação de pessoas com ideação suicida ou que já
            fizeram tentativas é um dos nossos maiores compromissos. O CAPS
            oferece um espaço de acolhimento, onde a pessoa é ouvida,
            compreendida e tratada com dignidade e respeito.
            <br />
            <br />
            A equipe multidisciplinar do CAPS, composta por psicólogos,
            psiquiatras, assistentes sociais, terapeutas ocupacionais,
            enfermeiros e farmacêuticos, trabalha em conjunto para oferecer um
            cuidado integral e personalizado a cada usuário. O farmacêutico
            desempenha um papel crucial nessa equipe, não apenas na gestão e
            dispensação dos medicamentos, mas também no acompanhamento do
            tratamento farmacológico, na orientação sobre o uso correto dos
            medicamentos, e na identificação de possíveis efeitos colaterais que
            possam interferir no bem-estar emocional do paciente.
            <br />
            <br />
            Além disso, o farmacêutico no CAPS está atento às necessidades
            individuais dos usuários, promovendo a adesão ao tratamento e
            colaborando na construção de estratégias terapêuticas que levem em
            consideração o uso racional dos medicamentos em conjunto com as
            PICS.
            <br />
            <br />
            Durante este mês de setembro, convido todos a refletirem sobre a
            importância da empatia, do cuidado e da atenção às pessoas ao nosso
            redor. A prevenção ao suicídio é um trabalho coletivo, e juntos
            podemos fazer a diferença na vida de muitas pessoas.
            <br />
            <br />
            Com compromisso e esperança, <br />
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
