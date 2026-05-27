import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Home from './paginas/Home/Home';
import Rotacao from './paginas/Rotacao/Rotacao';
import Contato from './paginas/Contato/Contato';
import PaginaPadrao from './componentes/PaginaPadrao/PaginaPadrao';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaPadrao/>}>
        <Route index element={<Home/>}/>
        <Route path='/rotacao' element={<Rotacao/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Route>
      <Route path='*' element={<div>Erro 404 - Pàgina não encontrada</div>}/>
    </Routes>
    </BrowserRouter>

  )

}

export default App