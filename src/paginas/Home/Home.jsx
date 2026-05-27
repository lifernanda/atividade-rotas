import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={styles.tituloHome}>Sobre a Série:</h1>
      <div className={styles.fundoparagrafo}>
        <p className={styles.paragrafoHome}>
        A série começa quando Rory, aos 16 anos, é aceita em uma escola preparatória de elite, 
        a Chilton. Como não tem condições financeiras para pagar as mensalidades, Lorelai é 
        obrigada a pedir ajuda aos seus pais ricos, Richard e Emily, de quem estava afastada. 
        Em troca do dinheiro, eles exigem que Lorelai e Rory participem de jantares na mansão 
        deles todas as sextas-feiras, reacendendo conflitos familiares do passado.
        </p>

        <p className={styles.paragrafoHome}>
        Lorelai: Ao longo das temporadas, ela passa de uma mãe que engravidou na adolescência
        a uma empresária de sucesso, realizando seu sonho de abrir uma pousada 
        (a Dragonfly Inn). Sua vida amorosa é marcada pelo romance de "vai e volta" 
        com o dono da lanchonete local, Luke Danes.
        </p>

        <p className={styles.paragrafoHome} >
        Rory: Acompanhamos seu amadurecimento, desde o ensino médio até o ingresso na 
        prestigiada Universidade de Yale. Sua vida romântica tem destaque com namorados 
        marcantes: o primeiro amor Dean, o rebelde Jess e o rico e ambicioso Logan.   
        </p>
      </div>
      
    </>
  );
};

export default Home;