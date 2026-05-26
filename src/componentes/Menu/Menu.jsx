import MenuLink from "../MenuLink/MenuLink";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/rotacao">Sala Rotação</MenuLink>
        <MenuLink to="/contato">Contato</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;