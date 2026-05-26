import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Home from './paginas/Home/Home';
import Rotacao from './paginas/Rotacao/Rotacao';
import Contato from './paginas/Contato/Contato';
import Menu from './componentes/Menu/Menu';




const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rotacao' element={<Rotacao/>}/>
      <Route path='/contato' element={<Contato/>}/>
      <Route path='*' element={<div>Erro 404 - Pàgina não encontrada</div>}/>
    </Routes>
    </BrowserRouter>

  )

}

export default App