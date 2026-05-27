import MenuLink from "../MenuLink/MenuLink";
import styles from "./Menu.module.css";
import logo from "../../assets/imagem-logo.png"

const Menu = () => {
  return (
    <header className={styles.cabecalho}>
      <img className={styles.logo} src={logo} alt="logo site" />
      <nav className={styles.navegacao}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/rotacao">Sala Rotação</MenuLink>
        <MenuLink to="/contato">Contato</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;