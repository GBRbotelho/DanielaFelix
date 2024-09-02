import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/7.webp";
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
            <span>Daniela Felix: </span> Uma Vida Dedicada à Fitoterapia e ao
            Amor pela Natureza
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            A história de Daniela Felix Menezes é marcada por superação, amor
            pela natureza e dedicação à saúde holística. Nascida em Brasília em
            1975, sua família mudou-se para São Paulo em busca de melhores
            oportunidades. Seu pai, José Felix, sempre trabalhou duro, mas sua
            perda em 2002 foi um marco na vida de Daniela. Sua mãe, Goianita
            Maria, uma mulher forte, lutou para garantir o futuro da família,
            mas infelizmente faleceu em 2021, vítima da COVID-19.
            <br />
            <br />
            Nos anos 90, Daniela estudou química e, inspirada pela avó Antônia,
            mergulhou no estudo das plantas medicinais. Ela ingressou na UFMG em
            1995 e, após alguns desafios, formou-se em Farmácia em 2005. Seu
            amor pelas plantas cresceu através de disciplinas como Botânica e
            Farmacognosia, e ela se tornou farmacêutica, trabalhando em diversas
            instituições e especializando-se em fitoterapia, homeopatia e
            florais de Bach.
            <br />
            <br />
            Daniela continuou sua busca por conhecimento, estudando fitoterapia
            chinesa e medicina tradicional na China. Ela compartilhou seu saber
            através de e-books e cursos, unindo tradições ocidentais e
            orientais. Em janeiro de 2022, Daniela dedicou-se exclusivamente a
            atender seus "interagentes", oferecendo cuidados holísticos em
            Hortolândia.
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
                  O Papel Vital do Farmacêutico e da Atenção Farmacêutica no
                  Cuidado em Saúde Mental
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
