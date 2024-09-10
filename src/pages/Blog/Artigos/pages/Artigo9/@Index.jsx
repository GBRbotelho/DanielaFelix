import React from "react";
import styles from "./@Index.module.css";
import Navbar from "../../../Containers/1Navbar";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../../../assets/imgs/fotos artigos/9.webp";
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
            <span>Casearia Sylvestris (Guaçatonga): </span> Um Tesouro da
            Natureza com Potencial Medicinal
          </h1>
          <p>
            Queridos leitores, <br />
            <br />
            Hoje vamos explorar uma planta medicinal fascinante: a Casearia
            sylvestris, popularmente conhecida como *Guaçatonga*. Essa planta,
            bastante valorizada na medicina tradicional, possui uma variedade de
            usos medicinais que vão desde o tratamento de inflamações até o
            combate a infecções virais. Vamos conhecer mais sobre seus aspectos
            botânicos, locais de ocorrência, princípios ativos, e como ela pode
            ser utilizada de forma segura.
            <br />
            <br />
            ### Aspectos Botânicos e Locais de Ocorrência
            <br />
            <br />
            A Casearia sylvestris é uma planta pertencente à família Salicaceae.
            Ela pode ser encontrada em forma de arbusto ou árvore, com altura
            variando de 2 a 10 metros. Suas folhas são lanceoladas e alternas,
            com bordas serrilhadas, e suas flores são pequenas e esverdeadas. Os
            frutos são cápsulas pequenas, que liberam sementes rodeadas por
            arilo vermelho.
            <br />
            <br />
            Essa planta é nativa da América do Sul e é amplamente distribuída em
            regiões tropicais e subtropicais do Brasil, sendo encontrada em
            biomas como a Mata Atlântica, Cerrado e Amazônia. Ela cresce
            espontaneamente em áreas de mata secundária, margens de rios, e
            encostas, sendo bastante resistente e adaptável a diferentes tipos
            de solo.
            <br />
            <br />
            ### Princípios Ativos e Usos Medicinais
            <br />
            <br />
            Os principais princípios ativos encontrados na Guaçatonga são os
            casearins, compostos diterpênicos que têm mostrado efeitos notáveis
            em estudos farmacológicos. Além disso, a planta contém flavonoides,
            taninos, e cumarinas, que contribuem para suas propriedades
            medicinais.
            <br />
            <br />
            Usos Medicinais Comprovados:
            <br />
            <br />
            1. Antiviral: Pesquisas têm demonstrado que os extratos de Casearia
            sylvestris possuem atividade antiviral significativa, especialmente
            contra vírus como o herpes simples e o vírus da dengue. Os casearins
            têm a capacidade de inibir a replicação viral, tornando a Guaçatonga
            uma opção promissora no apoio ao tratamento de infecções virais.
            <br />
            <br />
            2. Modulador Imunológico: A planta também possui propriedades
            imunomoduladoras, ajudando a equilibrar a resposta do sistema
            imunológico. Isso pode ser útil no tratamento de doenças autoimunes
            e na prevenção de infecções, fortalecendo o organismo de forma
            geral.
            <br />
            <br />
            3. Antiinflamatório e cicatrizante: A Guaçatonga é amplamente
            utilizada para tratar inflamações e acelerar a cicatrização de
            feridas. Seus compostos ajudam a reduzir a resposta inflamatória,
            promovendo a recuperação dos tecidos.
            <br />
            <br />
            4. Gastrite e úlceras: Popularmente, a Guaçatonga é usada para
            tratar problemas gastrointestinais, como gastrite e úlceras, devido
            à sua capacidade de proteger a mucosa gástrica e reduzir a acidez
            estomacal.
            <br />
            <br />
            Usos Populares:
            <br />
            <br />
            Na medicina tradicional, a Guaçatonga é usada como chá ou tintura
            para tratar uma variedade de condições, incluindo doenças de pele,
            úlceras, inflamações, picadas de insetos, e até como repelente
            natural. Em algumas regiões, é aplicada topicamente para aliviar
            dores reumáticas e cicatrizar feridas.
            <br />
            <br />
            ### Curiosidades e Segurança de Uso
            <br />
            <br />
            Uma curiosidade interessante sobre a Guaçatonga é que, além de seu
            uso medicinal, as folhas eram tradicionalmente usadas pelos
            indígenas para envenenar peixes, uma prática que evidenciava o poder
            dos compostos químicos presentes na planta
            <br />
            <br />
            Quanto à segurança de uso:
            <br />
            <br />
            - Adultos: A Guaçatonga é geralmente segura para uso em adultos
            quando utilizada em doses recomendadas, como chás e extratos
            padronizados.
            <br />
            <br />
            - Crianças: O uso em crianças deve ser cauteloso e sempre sob
            orientação de um fitoterapeuta qualificado, especialmente em
            crianças menores de 2 anos.
            <br />
            <br />
            - Gestantes e Nutrizes: Mulheres grávidas e lactantes devem evitar o
            uso de Guaçatonga, pois não há estudos suficientes que garantam sua
            segurança nessas fases.
            <br />
            <br />
            - Idosos: Para idosos, a Guaçatonga pode ser usada com segurança,
            mas sempre com atenção às doses e à interação com outros
            medicamentos que possam estar sendo utilizados.
            <br />
            <br />
            Conclusão
            <br />
            <br />
            Quanto à segurança de uso:
            <br />
            <br />
            A Casearia sylvestris, ou Guaçatonga, é uma planta de grande valor
            na fitoterapia, com propriedades medicinais que podem ser úteis no
            tratamento complementar de diversas condições de saúde. Sua ação
            antiviral e imunomoduladora a torna especialmente interessante em
            tempos onde o fortalecimento do sistema imunológico é fundamental.
            <br />
            <br />
            No entanto, é essencial utilizar essa planta de forma responsável,
            sempre buscando orientação de um profissional de saúde qualificado
            para garantir que seu uso seja seguro e eficaz, respeitando as
            particularidades de cada indivíduo.
            <br />
            <br />
            Com carinho e cuidado, <br />
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
