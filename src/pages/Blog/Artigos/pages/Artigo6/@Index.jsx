import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/6.webp";
import img2 from "../../../../../assets/imgs/fotos artigos/1.webp";
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
            <span>O Papel Vital do Farmacêutico </span> e da Atenção
            Farmacêutica no Cuidado em Saúde Mental
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Hoje, vamos mergulhar mais fundo no universo da saúde mental e
            explorar o papel essencial do farmacêutico e da atenção farmacêutica
            dentro do CAPS (Centro de Atenção Psicossocial). <br />
            <br />O farmacêutico desempenha uma função crucial na equipe
            multidisciplinar do CAPS, contribuindo para o cuidado integral e
            individualizado dos usuários. Sua atuação vai além da dispensação de
            medicamentos, envolvendo a avaliação e acompanhamento dos
            tratamentos farmacológicos, a promoção do uso racional de
            medicamentos e a prevenção de problemas relacionados aos mesmos.{" "}
            <br />
            <br />
            Dentro do contexto da saúde mental, a atenção farmacêutica
            desempenha um papel ainda mais significativo. Ela envolve a análise
            criteriosa da prescrição médica, a identificação de possíveis
            interações medicamentosas e efeitos adversos, o monitoramento da
            adesão ao tratamento e o suporte ao paciente em relação ao uso
            correto dos medicamentos. <br />
            <br />
            Além disso, o farmacêutico no CAPS pode fornecer orientações sobre o
            manejo dos efeitos colaterais dos medicamentos, esclarecer dúvidas
            dos usuários e de seus familiares, e colaborar na elaboração de
            estratégias para a redução gradual das doses de medicamentos quando
            apropriado, em busca de uma abordagem mais individualizada e menos
            medicamentosa. <br />
            <br />
            A atenção farmacêutica também se estende à promoção da saúde e
            prevenção de recaídas, através da educação em saúde, orientações
            sobre hábitos de vida saudáveis, e estímulo ao autocuidado e
            autocomprometimento do usuário com seu tratamento. <br />
            <br />
            No CAPS, onde o foco está na recuperação e reintegração social das
            pessoas com transtornos mentais, o farmacêutico desempenha um papel
            fundamental na promoção da autonomia e qualidade de vida dos
            usuários. Sua atuação integrada à equipe multidisciplinar contribui
            para um cuidado mais humanizado, centrado no indivíduo e em suas
            necessidades específicas. <br />
            <br />
            Como farmacêutica comprometida com a saúde mental, tenho a honra de
            fazer parte dessa equipe dedicada e comprometida em oferecer o
            melhor cuidado possível aos nossos usuários. Trabalhamos juntos para
            promover a inclusão, o acolhimento e o bem-estar de todos aqueles
            que buscam apoio e cuidado em nosso serviço. <br />
            <br />
            Espero que este texto tenha proporcionado uma visão mais ampla e
            profunda do importante papel do farmacêutico e da atenção
            farmacêutica dentro do CAPS, e como esses profissionais contribuem
            para o cuidado integral e humanizado em saúde mental. <br />
            <br />
            <br />
            <br />
            Com gratidão e compromisso, <br />
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
                  Caminhando Juntos: Explorando o Mundo do Autismo e Terapias
                  Integrativas
                </p>
                <Link to={"/blog/caminhando-juntos"}>
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
