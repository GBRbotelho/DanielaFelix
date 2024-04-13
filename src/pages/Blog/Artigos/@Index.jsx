import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../Containers/1Navbar";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.content}>
          <h1>
            Como <span>diminuir o estresse</span> por meio das flores
          </h1>
          <p>
            as margens tranquilas do rio, onde os salgueiros se curvavam
            graciosamente em direção à água, o tempo parecia desacelerar. O sol
            poente pintava o céu com uma paleta de cores vibrantes, refletindo
            sua beleza nas águas serenas. As aves cantavam em harmonia enquanto
            voavam em círculos acima, e o suave farfalhar das folhas completava
            a sinfonia da natureza. À medida que o crepúsculo avançava, uma aura
            mágica envolvia o cenário. As sombras alongavam-se lentamente,
            criando silhuetas suaves e evocativas na paisagem. O ar estava
            impregnado com o aroma fresco da terra molhada pela chuva recente,
            enquanto os últimos raios de sol tingiam as nuvens com tons de
            laranja e rosa. Neste momento de quietude, a mente vagava
            livremente, perdendo-se em pensamentos e memórias. Era como se o
            tempo se desfizesse em uma tapeçaria de momentos, cada um mais
            precioso que o anterior. Ali, no crepúsculo dourado, a vida parecia
            suspensa, imersa em uma eternidade fugaz de serenidade e encanto.
            Nas margens tranquilas do rio, onde os salgueiros se curvavam
            graciosamente em direção à água, o tempo parecia desacelerar. O sol
            poente pintava o céu com uma paleta de cores vibrantes, refletindo
            sua beleza nas águas serenas. As aves cantavam em harmonia enquanto
            voavam em círculos acima, e o suave farfalhar das folhas completava
            a sinfonia da natureza. À medida que o crepúsculo avançava, uma aura
            mágica envolvia o cenário. As sombras alongavam-se lentamente,
            criando silhuetas suaves e evocativas na paisagem. O ar estava
            impregnado com o aroma fresco da terra molhada pela chuva recente,
            enquanto os últimos raios de sol tingiam as nuvens com tons de
            laranja e rosa. Neste momento de quietude, a mente vagava
            livremente, perdendo-se em pensamentos e memórias. Era como se o
            tempo se desfizesse em uma tapeçaria de momentos, cada um mais
            precioso que o anterior.
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
