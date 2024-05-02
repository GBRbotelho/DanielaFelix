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
