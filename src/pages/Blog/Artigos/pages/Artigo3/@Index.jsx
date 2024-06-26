import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/3.webp";
import img2 from "../../../../../assets/imgs/fotos artigos/1.webp";
import img3 from "../../../../../assets/imgs/fotos artigos/2.webp";
import img4 from "../../../../../assets/imgs/fotos artigos/4.webp";

export default function Index() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.content}>
          <h1>
            <span>Sussurros Noturnos: </span> A Importância da Rotina do Sono no
            Autismo e o Papel da Fitoterapia
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Hoje, vamos explorar um aspecto essencial para a saúde e o bem-estar
            das pessoas com autismo: o sono. Como uma defensora incansável da
            saúde integral, gostaria de destacar a importância da rotina do sono
            e como a fitoterapia pode ser uma aliada valiosa na promoção de
            noites tranquilas e restauradoras. <br />
            <br />
            Para muitas pessoas com autismo, a qualidade do sono pode ser
            afetada por uma variedade de fatores, como sensibilidades
            sensoriais, ansiedade e dificuldades de regulação emocional.
            Estabelecer uma rotina consistente antes de dormir pode ajudar a
            preparar o corpo e a mente para o descanso, proporcionando um
            ambiente propício para um sono reparador. <br />
            <br />
            Além disso, a fitoterapia oferece uma abordagem natural e suave para
            promover o sono. Entre as diversas plantas com propriedades
            calmantes, a melatonina vegetal se destaca como uma opção eficaz no
            tratamento da insônia, inclusive em crianças pequenas. Fontes
            naturais de melatonina, como a raiz de valeriana, a flor de maracujá
            e a cereja azeda, são conhecidas por seu papel na regulação do ciclo
            sono-vigília do corpo. <br />
            <br />
            Integrar a melatonina vegetal à rotina de sono pode ajudar a reduzir
            o tempo necessário para adormecer, melhorar a qualidade do sono e
            promover uma sensação de descanso mais profundo e revitalizante. No
            entanto, é importante consultar um profissional de saúde qualificado
            antes de iniciar qualquer tratamento com fitoterapia, especialmente
            em crianças. <br />
            <br />
            Espero que este texto tenha destacado a importância da rotina do
            sono no cuidado com o autismo e demonstrado como a fitoterapia,
            especialmente a melatonina vegetal, pode ser uma ferramenta valiosa
            na promoção de noites tranquilas e revigorantes. <br />
            <br />
            <br />
            <br />
            Com sussurros de serenidade noturna, <br />
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
