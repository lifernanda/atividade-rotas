import styles from "./Card.module.css";

const Card = ({imagem, descricao}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={imagem} />
      <div>
        <h2 className={styles.descricao}>{descricao}</h2>
      </div>
    </div>
  );
};

export default Card;