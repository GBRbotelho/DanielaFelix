import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/12.webp";
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
            <span>Plantas Medicinais </span> como Aliadas no Tratamento da
            Ansiedade e Depressão
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            No cuidado à saúde mental, cada gesto de atenção e cuidado pode
            fazer a diferença, e as plantas medicinais têm se mostrado valiosas
            aliadas nos tratamentos complementares à ansiedade e depressão,
            auxiliando na prevenção ao suicídio. Hoje, vou compartilhar com
            vocês algumas dessas plantas que podem contribuir de forma natural
            para o bem-estar emocional, complementando os tratamentos
            convencionais e fortalecendo o equilíbrio mental.
            <br />
            <br />
            ### Plantas Medicinais para Ansiedade
            <br />
            <br />
            1. Passiflora (Passiflora incarnata): Mais conhecida como maracujá,
            essa planta é amplamente utilizada para acalmar o sistema nervoso e
            reduzir a ansiedade. Suas propriedades sedativas suaves ajudam a
            aliviar a tensão nervosa e promovem uma sensação de relaxamento,
            sendo especialmente útil em casos de insônia causada pela ansiedade.
            <br />
            <br />
            2. Valeriana (Valeriana officinalis): Tradicionalmente usada para
            tratar a ansiedade e a insônia, a valeriana tem efeitos calmantes
            que ajudam a reduzir a agitação e o nervosismo. Ela pode ser
            consumida em forma de chá ou cápsulas, auxiliando no relaxamento e
            na melhoria da qualidade do sono.
            <br />
            <br />
            3. Melissa (Melissa officinalis): Também conhecida como
            erva-cidreira, a melissa é uma planta com propriedades ansiolíticas
            que ajudam a diminuir a ansiedade, o estresse e a insônia. Seu aroma
            suave e relaxante pode ser aproveitado em chás ou na aromaterapia.
            <br />
            <br />
            4. Lavanda (Lavandula angustifolia): A lavanda é famosa por suas
            propriedades calmantes e relaxantes. O óleo essencial de lavanda é
            amplamente utilizado na aromaterapia para reduzir a ansiedade e o
            estresse, promovendo um estado de tranquilidade mental.
            <br />
            <br />
            5. Camomila (Matricaria chamomilla): A camomila é uma das plantas
            mais conhecidas por seu efeito calmante. Seu chá é excelente para
            aliviar a ansiedade e melhorar a qualidade do sono, sendo uma opção
            segura e eficaz para promover o relaxamento.
            <br />
            <br />
            ### Plantas Medicinais para Depressão
            <br />
            <br />
            1. Erva-de-São-João (Hypericum perforatum): Conhecida por suas
            propriedades antidepressivas, a Erva-de-São- João é uma planta
            amplamente utilizada para tratar casos leves a moderados de
            depressão. Ela ajuda a aumentar os níveis de serotonina no cérebro,
            melhorando o humor e a sensação de bem-estar.
            <br />
            <br />
            2. Ginseng (Panax ginseng): O ginseng é uma planta adaptogênica que
            ajuda o corpo a lidar com o estresse e a fadiga, sintomas comuns na
            depressão. Ele contribui para o aumento da energia e do ânimo,
            auxiliando na recuperação do equilíbrio emocional.
            <br />
            <br />
            3. Alecrim (Rosmarinus officinalis): O alecrim é uma planta
            estimulante que ajuda a melhorar o humor e a combater a fadiga
            mental. Seu óleo essencial pode ser utilizado na aromaterapia para
            proporcionar clareza mental e alívio da tristeza.
            <br />
            <br />
            4. Rhodiola (Rhodiola rosea): A rhodiola é uma planta adaptogênica
            que ajuda o corpo a adaptar-se ao estresse, reduzindo os sintomas da
            depressão. Ela é conhecida por melhorar a resistência à fadiga e
            aumentar a sensação de bem-estar.
            <br />
            <br />
            5. Hortelã-pimenta (Mentha piperita): Embora seja mais conhecida por
            seu uso digestivo, a hortelã-pimenta também tem propriedades
            estimulantes que podem ajudar a combater a depressão leve. Seu aroma
            refrescante pode ser utilizado na aromaterapia para elevar o ânimo e
            proporcionar uma sensação revigorante.
            <br />
            <br />
            ### A Importância do Acompanhamento Profissional
            <br />
            <br />
            Embora essas plantas medicinais possam oferecer benefícios no manejo
            da ansiedade e da depressão, é essencial lembrar que seu uso deve
            ser sempre orientado por um profissional de saúde qualificado. Elas
            podem ser um complemento valioso ao tratamento prescrito pelo
            médico, mas nunca devem substituir a medicação ou a terapia
            recomendada para casos graves.
            <br />
            <br />
            No CAPS, onde atuo como farmacêutica em equipe multidisciplinar,
            valorizamos o uso integrado de tratamentos convencionais e Práticas
            Integrativas e Complementares em Saúde (PICS) para proporcionar um
            cuidado mais completo e humanizado. Estamos aqui para oferecer o
            suporte necessário a quem enfrenta os desafios da saúde mental,
            sempre buscando as melhores estratégias para promover o bem-estar e
            a recuperação.
            <br />
            <br />
            Se você ou alguém próximo está passando por um momento difícil, não
            hesite em procurar ajuda. A prevenção ao suicídio começa com o
            cuidado e a atenção a si mesmo e aos outros.
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
