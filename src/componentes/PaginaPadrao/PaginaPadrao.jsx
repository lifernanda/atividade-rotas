import { Outlet } from "react-router";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import Rodape from "../Rodape/Rodape";

const PaginaPadrao = () => {
  return (
    <main>
      <Menu />
      <Banner />
      <Outlet />
      <Rodape/>
    </main>
  );
};

export default PaginaPadrao;