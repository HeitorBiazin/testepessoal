import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Footer from '../site/Components/footer';
import Header from '../site/Components/header';
import './loginstyle.css';

import firebase from '../firebase/firebase';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


/*Pagina de Login */

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const auth = getAuth();

  function LoginUsuario(){
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user
      setSuccess('Login...');
      setError(null);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMensage = error.message;
      setError('Email/Senha incorretos!');
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
            <h3 className='sing'>Login</h3>
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
                <input onChange={altEmail} type="text" className="form-control" placeholder="Usuário/E-mail" />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input onChange={altSenha} type="password" className="form-control" placeholder="Senha" />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />Lembrar
              </div>
              <div className="form-group">
                <input onClick={LoginUsuario} type="button" value="Login" className="btn float-right login_btn" />
              </div>
            

            
              {error&& <div className="alert alert-danger" role="alert">{error}</div>}
              {success&& <div className="alert alert-success" role="alert">{success}</div>}

            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Não possui uma conta?<Link to="/criar">Cadstre-se</Link>
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
export default Login;    