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
            <span>Desvendando o Autismo: </span> O Caminho da Descoberta e
            Aceitação
          </h1>
          <p>
            Neste artigo, vamos explorar uma jornada de autodescoberta e
            superação que muitas pessoas enfrentam ao longo da vida: o
            diagnóstico tardio do autismo. Esta é a história de uma mulher
            extraordinária que, aos 40 anos, descobriu que pertencia ao espectro
            autista, e como essa revelação trouxe tanto alívio quanto desafios.{" "}
            <br />
            <br />
            Imagine uma mulher forte e determinada, que enfrentou inúmeras
            batalhas ao longo de sua vida sem entender completamente o porquê.
            Ela sempre se sentiu diferente, desajustada, lutando para se
            encaixar em um mundo que muitas vezes parecia estranho e confuso.
            Mesmo assim, ela conseguiu construir uma vida aparentemente normal:
            fez faculdade, obteve um mestrado, trabalhou com o público, deu
            palestras e até mesmo mantinha uma vida social ativa. <br />
            <br />
            No entanto, por trás dessa aparente normalidade, havia uma constante
            sensação de estranhamento e incompreensão. Era como se ela estivesse
            vivendo uma vida que não era completamente sua, como se algo
            essencial estivesse faltando.
            <br />
            <br />
            Foi somente aos 40 anos que essa mulher finalmente encontrou as
            respostas que tanto buscava. O diagnóstico tardio do autismo trouxe
            uma mistura de emoções: alívio por finalmente entender a si mesma,
            mas também desafios, especialmente quando se deparou com o
            preconceito e a falta de compreensão daqueles ao seu redor. <br />
            <br />
            Muitas pessoas não conseguiam reconciliar a imagem que tinham dela
            com a ideia de alguém no espectro autista. "Mas você é tão sociável!
            Como pode ser autista?", ouvia ela com frequência. O preconceito e a
            falta de entendimento eram difíceis de suportar, mas ela sabia que
            tinha encontrado uma verdade que era sua, e isso lhe dava forças
            para seguir em frente. <br />
            <br />
            Foi então que ela descobriu como a fitoterapia, os Florais de Bach e
            a aromaterapia podiam ser aliados poderosos em sua jornada de
            autodescoberta e aceitação. Antes mesmo de receber o diagnóstico,
            essas práticas terapêuticas já haviam trazido alívio para suas
            questões emocionais, ajudando-a a encontrar equilíbrio e bem-estar.{" "}
            <br />
            <br />
            Hoje, essa mulher segue em sua jornada, enfrentando os desafios com
            coragem e determinação, enquanto compartilha sua história para
            inspirar e encorajar outros que possam estar trilhando um caminho
            semelhante. Sua história nos lembra da importância da autenticidade,
            da compaixão e do poder transformador da aceitação. <br />
            <br />
            Com gratidão pela jornada, <br />
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
