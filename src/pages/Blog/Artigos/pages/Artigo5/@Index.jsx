import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/5.webp";
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
            <span>18 de Maio: </span> Unindo Forças na Luta Antimanicomial
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Hoje, dedicamos nosso espaço para celebrar uma causa nobre e
            essencial: o dia 18 de maio, dia da luta antimanicomial. Esta data
            marca um importante movimento que busca transformar o cuidado em
            saúde mental, promovendo a inclusão social, o respeito aos direitos
            humanos e o fim do preconceito em relação às pessoas com transtornos
            mentais. <br />
            <br />
            A luta antimanicomial teve origem no Brasil na década de 1970, como
            uma resposta ao modelo de tratamento psiquiátrico centrado em
            internações prolongadas em instituições asilares, conhecidas como
            manicômios. O movimento propôs uma abordagem mais humanizada e
            inclusiva, baseada no respeito à autonomia e dignidade das pessoas
            com transtornos mentais. <br />
            <br />
            Nesse contexto, os CAPS (Centros de Atenção Psicossocial) surgiram
            como uma alternativa aos hospitais psiquiátricos, oferecendo um
            espaço de acolhimento, tratamento e reinserção social para pessoas
            em sofrimento psíquico. Os CAPS são serviços de saúde mental que
            contam com uma equipe multidisciplinar composta por profissionais
            como psicólogos, psiquiatras, assistentes sociais, enfermeiros,
            terapeutas ocupacionais e outros. <br />
            <br />
            Existem diferentes tipos de CAPS, cada um com sua especificidade e
            abrangência. Os CAPS I são voltados para atendimento em situações de
            crise e acompanhamento de pacientes com transtornos mentais severos
            e persistentes. Já os CAPS II são destinados a pessoas com
            transtornos mentais mais leves, oferecendo atendimento ambulatorial
            e apoio psicossocial. <br />
            <br />
            Dentro desse contexto de cuidado integral, as Práticas Integrativas
            e Complementares em Saúde (PICS) desempenham um papel significativo.
            Terapias como a aromaterapia e os florais de Bach têm sido cada vez
            mais integradas aos serviços de saúde mental, proporcionando
            benefícios emocionais, psicológicos e físicos aos usuários. <br />
            <br />
            A aromaterapia, por exemplo, utiliza óleos essenciais naturais para
            promover o equilíbrio emocional e o bem-estar mental. Já os florais
            de Bach são preparados à base de essências de flores e plantas,
            indicados para auxiliar no tratamento de desequilíbrios emocionais e
            estados psicológicos diversos. <br />
            <br />
            É com grande orgulho que compartilho com vocês que atuo em equipe
            multidisciplinar dentro do CAPS - Adulto, trabalhando lado a lado
            com outros profissionais para oferecer um cuidado humanizado e
            integral às pessoas em sofrimento psíquico. Estamos comprometidos em
            promover a inclusão, o acolhimento e a dignidade de todos os nossos
            usuários, respeitando sua singularidade e buscando sempre o melhor
            para sua saúde mental. <br />
            <br />
            Neste dia da luta antimanicomial, renovamos nosso compromisso com
            uma sociedade mais justa e inclusiva, onde todas as pessoas tenham o
            direito de viver com dignidade e respeito, independentemente de sua
            condição de saúde mental. <br />
            <br />
            <br />
            <br />
            Com esperança e determinação,
            <br />
            <br /> Dra. Daniela Felix
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
