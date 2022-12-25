import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../site/Components/header'
import Footer from '../site/Components/footer';

import firebase from '../firebase/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


/*Pagina para criar conta */
function Criar() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const auth = getAuth();
  
  function CriarUsuario(){
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setSuccess('Criado com sucesso!');
        setError(null);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError('Erro ao criar usuário!');
        setSuccess(null);
    });
  }

    function altEmail(event){
      setEmail(event.target.value)
    }
    
    function altSenha(event){
      setSenha(event.target.value)
    }

  return <section id="login" className='bglogin'>
    <>
    <Header/>
    </>
    <div className="container">
      <div className="d-flex justify-content-center mt-5 h-100">
        <div className="card cardlg mt-5">
          <div className="card-header">
            <h3 className='sing'>Criar Conta</h3>
            <div className="d-flex justify-content-end social_icon">
              <span><i className="fab fa-facebook-square"></i></span>
              <span><i className="fab fa-google-plus-square"></i></span>
              <span><i className="fab fa-twitter-square"></i></span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input onChange={altEmail} type="text" className="form-control" placeholder="E-mail" />
              </div>
              
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input onChange={altSenha} type="password" className="form-control" placeholder="Senha" />
              </div>
              
              
              <div className="form-group">
                <input onClick={CriarUsuario} type="buttos" value="Criar" className="btn float-right login_btn" />
              </div>
            
              {error&& <div className="alert alert-danger" role="alert">{error}</div>}
              {success&& <div className="alert alert-success" role="alert">{success}</div>}

            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Já possui uma conta?<Link to="/app">Login</Link>
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/resenha">Esqueceu sua senha?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='footer'>
       <Footer/>
      </div>
  </section>
    
}
export default Criar;