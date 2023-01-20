import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Site from "./site/home"
import Login from "./login/login"
import Criar from "./login/criarusuario"
import Resenha from "./login/resenha"
import Cadastro from './PrivateSite/cadastro de produtos/cadastro';
import Cliente from './PrivateSite/HomeAuth';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            
            <Routes>
              <Route path='/' element={<Site />}/>
              <Route path='/Login' element={<Login />}/>
              <Route path='/criar' element={<Criar />}/>
              <Route path='/resenha' element={<Resenha />}/>
              <Route path='/cadastro' element={<Cadastro />}/>
              <Route path='/cliente' element={<Cliente />}/>
              
            </Routes>
            
        </BrowserRouter> 
    </div>
  );
}

export default App;
