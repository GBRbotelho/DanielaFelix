import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/13.webp";
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
            <span>Unha de Gato (Uncaria tomentosa): </span> Um Tesouro da
            Fitoterapia para a Saúde Integral
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Hoje vamos falar sobre a Uncaria tomentosa, popularmente conhecida
            como *Unha de Gato*. Esta planta amazônica é valorizada por suas
            propriedades medicinais, sendo amplamente utilizada na medicina
            tradicional e moderna, principalmente como antiinflamatório e
            modulador imunológico. Vamos explorar seus aspectos botânicos,
            locais de ocorrência, princípios ativos, usos comprovados e
            populares, e sua segurança de uso.
            <br />
            <br />
            ### Aspectos Botânicos e Locais de Ocorrência
            <br />
            <br />
            A Unha de Gato (Uncaria tomentosa) é uma planta trepadeira
            pertencente à família Rubiaceae. Ela é reconhecida por seus ganchos
            curvados semelhantes a garras de gato, que lhe dão o nome popular.
            Suas folhas são ovais, com textura coriácea, e suas flores são
            pequenas, agrupadas em inflorescências de coloração amarela a
            branco-creme.
            <br />
            <br />
            Essa planta é nativa das florestas tropicais da América do Sul,
            especialmente na Amazônia peruana e brasileira, e também é
            encontrada em outras regiões da América Central. Ela cresce em áreas
            de floresta úmida, em solos ricos e bem drenados, geralmente em
            altitudes que variam de 400 a 800 metros.
            <br />
            <br />
            ### Princípios Ativos e Usos Medicinais
            <br />
            <br />
            A Unha de Gato é rica em alcaloides oxindólicos, como isopteropodina
            e pteropodina, além de glicosídeos, flavonoides, polifenóis, e
            taninos, que conferem à planta suas propriedades terapêuticas.
            <br />
            <br />
            Usos Medicinais Comprovados:
            <br />
            <br />
            1. Antiinflamatório: A Unha de Gato é amplamente conhecida por sua
            potente ação antiinflamatória, sendo eficaz no tratamento de
            condições como artrite, reumatismo, e outras doenças inflamatórias
            crônicas. Seus alcaloides ajudam a inibir a produção de substâncias
            que promovem a inflamação no corpo.
            <br />
            <br />
            2. Modulador Imunológico: A planta também atua como um poderoso
            modulador imunológico, fortalecendo as defesas naturais do corpo.
            Ela é utilizada para melhorar a resposta imunológica em casos de
            infecções, doenças autoimunes, e até mesmo como adjuvante em
            tratamentos oncológicos.
            <br />
            <br />
            3. Saúde da Mulher: Na saúde feminina, a Unha de Gato tem sido
            utilizada para aliviar sintomas de doenças inflamatórias pélvicas,
            como endometriose e cistites, além de auxiliar no equilíbrio
            hormonal e no tratamento de infecções urinárias.
            <br />
            <br />
            Usos Populares:
            <br />
            <br />
            Na medicina popular, a Unha de Gato é usada em forma de chá,
            tintura, cápsulas e extratos para tratar uma ampla gama de
            condições, incluindo problemas digestivos, úlceras gástricas, e como
            um tônico geral para fortalecer o corpo e melhorar a vitalidade.
            <br />
            <br />
            ### Curiosidades e Segurança de Uso
            <br />
            <br />
            Uma curiosidade interessante sobre a Unha de Gato é sua popularidade
            entre as populações indígenas da Amazônia, que a utilizam há séculos
            para tratar doenças inflamatórias e infecciosas. Além disso, a
            planta tem ganhado cada vez mais atenção na medicina ocidental por
            suas propriedades terapêuticas.
            <br />
            <br />
            Segurança de Uso:
            <br />
            <br />
            - Adultos: A Unha de Gato é geralmente segura para uso em adultos,
            especialmente em doses recomendadas. No entanto, deve-se evitar o
            uso prolongado sem supervisão de um profissional fitoterapeuta
            qualificado.
            <br />
            <br />
            - Crianças: O uso em crianças deve ser cauteloso e sempre sob
            orientação de um profissional fitoterapeuta qualificado, devido à
            falta de estudos suficientes sobre segurança e dosagem.
            <br />
            <br />
            - Gestantes e Nutrizes: Mulheres grávidas e lactantes devem evitar o
            uso de Unha de Gato, pois pode estimular o sistema imunológico e
            causar efeitos adversos, além de não haver estudos conclusivos sobre
            sua segurança nessas fases.
            <br />
            <br />
            - Idosos: Para idosos, a Unha de Gato pode ser usada com segurança,
            mas é importante monitorar a interação com outros medicamentos que
            possam estar sendo utilizados.
            <br />
            <br />
            ### Interações Medicamentosas e Reações Adversas
            <br />
            <br />
            O uso inadequado da Uncaria tomentosa pode levar a reações adversas
            e interações medicamentosas que precisam ser consideradas:
            <br />
            <br />
            - Interações Medicamentosas: A Unha de Gato pode interagir com
            medicamentos imunossupressores, como a ciclosporina, reduzindo sua
            eficácia. Além disso, pode potencializar o efeito de
            anticoagulantes, como a varfarina, aumentando o risco de
            sangramentos. Pacientes que utilizam medicamentos para pressão
            arterial também devem ser cautelosos, pois a Unha de Gato pode
            potencializar o efeito hipotensor.
            <br />
            <br />
            - Reações Adversas: Entre as reações adversas mais comuns, estão
            desconforto gastrointestinal, como náuseas, vômitos e diarreia. Em
            casos mais raros, pode ocorrer uma redução dos glóbulos brancos no
            sangue, afetando a imunidade. O uso prolongado sem acompanhamento
            pode levar a alterações hepáticas e renais.
            <br />
            <br />
            ### Outras Plantas Conhecidas como Unha de Gato
            <br />
            <br />
            É importante destacar que existem outras plantas que também são
            popularmente conhecidas como Unha de Gato, mas que pertencem a
            diferentes espécies e têm usos medicinais distintos:
            <br />
            <br />
            1. Acacia plumosa (Acácia da Austrália): Conhecida como Unha de Gato
            no Brasil, essa planta é usada tradicionalmente em infusões para
            tratar problemas respiratórios e como adstringente. Seu uso
            medicinal, no entanto, não é tão difundido quanto o da Uncaria
            tomentosa.
            <br />
            <br />
            2. Mimosa aculeaticarpa: Outra planta chamada Unha de Gato, nativa
            do México e do sul dos Estados Unidos, usada tradicionalmente para
            tratar dores de cabeça e problemas digestivos.
            <br />
            <br />
            3. Harpagophytum procumbens (Garra-do-Diabo): Embora não seja
            chamada de Unha de Gato, o nome em inglês "Devil's Claw" (Garra do
            Diabo) é semelhante. Esta planta é usada para tratar dores
            articulares e inflamações, muito semelhante à Uncaria tomentosa em
            seu uso anti-inflamatório.
            <br />
            <br />
            ### Conclusão
            <br />
            <br />
            A Uncaria tomentosa, ou Unha de Gato, é uma planta com um potencial
            terapêutico imenso, especialmente como antiinflamatório e modulador
            imunológico. Seus benefícios para a saúde da mulher, assim como suas
            aplicações na medicina tradicional e moderna, fazem dela uma
            poderosa aliada no cuidado à saúde integral.
            <br />
            <br />
            No entanto, como qualquer planta medicinal, é essencial utilizá-la
            com responsabilidade, sempre com a orientação de um profissional
            fitoterapeuta qualificado, para garantir que seu uso seja seguro e
            eficaz.
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
