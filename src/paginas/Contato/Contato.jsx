import { useState } from "react";
import styles from "./Contato.module.css";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className={styles.secaoFormulario}>
      <div className={styles.formularioContainer}>
        <div className={styles.formularioHeader}>
          <h2 className={styles.formularioTitulo}>Personagem recomendado</h2>
        </div>

        <form className={styles.formularioForm}>
          <div className={styles.inputFormulario}>
            <label htmlFor="nome">Nome</label>
            <input 
              id="nome"
              type="text" 
              placeholder="Digite seu nome..." 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className={styles.inputFormulario}>
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="exemplo@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button 
            className={styles.btnSubmit} 
            type="submit"
            onClick={() => alert(`Nome: ${nome}\nEmail: ${email}`)}
          >
            ✓ Enviar Dados
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
