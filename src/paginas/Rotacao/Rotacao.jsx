import Card from "../../componentes/Card/Card";
import listaParticipantes from "../../json/dados.json";
import styles from "./Rotacao.module.css"

const Rotacao = () => {
  return(  
     <div>
        <h1 className={styles.titulorotacao}>Personagens:</h1>
        <div className={styles.cards}>
          {listaParticipantes.map((item) => (
            <div key={item.id}> 
              <Card 
                imagem = {item.img}
                descricao = {item.descricao}
              />
            </div>
          ))}
        </div>
     </div>
  )
}

export default Rotacao;