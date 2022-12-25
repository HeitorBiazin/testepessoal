import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Site from "./site/home"
import Login from "./login/login"
import Criar from "./login/criarusuario"
import Resenha from "./login/resenha"
import Cadastro from './cadastro de produtos/cadastro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Site />}/>
          <Route path='/app' element={<Login />}/>
          <Route path='/criar' element={<Criar />}/>
          <Route path='/resenha' element={<Resenha />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
        </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
