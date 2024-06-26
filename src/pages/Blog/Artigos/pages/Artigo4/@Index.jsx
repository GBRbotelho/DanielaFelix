import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/4.webp";
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
            <span>Explorando os Aromas da Serenidade: </span> O Papel da
            Aromaterapia no Cuidado com o Autismo
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Hoje, mergulharemos em um universo encantador e terapêutico: a
            aromaterapia. Como uma apaixonada defensora das terapias
            integrativas, gostaria de compartilhar como essa prática pode ser
            uma aliada valiosa no cuidado com o autismo.
            <br />
            <br />A aromaterapia envolve o uso de óleos essenciais, substâncias
            naturais extraídas de plantas, que possuem propriedades terapêuticas
            poderosas. No contexto do autismo, onde a sensibilidade sensorial
            pode ser aumentada, os aromas podem desempenhar um papel
            significativo no gerenciamento do estresse, na promoção da calma e
            no estímulo ao bem-estar emocional. <br />
            <br />
            Entre os diversos óleos essenciais, um destaque especial é a laranja
            doce. Este óleo essencial, extraído da casca da fruta, possui
            propriedades relaxantes, antidepressivas e revigorantes. Em casos de
            autismo, onde a ansiedade e a dificuldade de concentração podem ser
            desafios frequentes, a laranja doce pode ser especialmente útil.{" "}
            <br />
            <br />
            Seu aroma doce e cítrico tem o poder de acalmar a mente, reduzir a
            agitação e promover uma sensação de tranquilidade. Além disso,
            estudos sugerem que a laranja doce pode ajudar a melhorar o humor e
            a promover uma sensação de bem-estar geral. <br />
            <br />
            Ao utilizar a laranja doce em sessões de aromaterapia, seja por meio
            de difusores, massagens ou banhos aromáticos, podemos proporcionar
            um ambiente mais sereno e acolhedor para indivíduos com autismo.
            Essa abordagem holística pode complementar outras intervenções
            terapêuticas, contribuindo para uma vida mais equilibrada e
            gratificante. <br />
            <br />É importante ressaltar que cada pessoa é única, e os efeitos
            dos óleos essenciais podem variar de indivíduo para indivíduo.
            Portanto, é fundamental consultar um profissional qualificado antes
            de iniciar qualquer tratamento com aromaterapia, especialmente em
            casos de autismo. <br />
            <br />
            Espero que este texto tenha inspirado vocês a explorar o potencial
            terapêutico dos aromas e a considerar a aromaterapia como uma
            ferramenta valiosa no cuidado com o autismo. <br />
            <br />
            <br />
            <br />
            Com aromas de serenidade, <br />
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
