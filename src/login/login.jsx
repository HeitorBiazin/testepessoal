import React, {  useState } from 'react';
import {Link, Navigate} from 'react-router-dom'
import Footer from '../site/Components/footer';
import Header from '../site/Components/header';
import './loginstyle.css';

import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from '../firebase/firebase';

/*Pagina de Login */

export const Login = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  //*Login Google*//
  function LoginGoogle(){
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
    setSuccess(<Navigate to="/Cliente" />);
    // The signed-in user info.
    console.log(token)
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    setError('E-mail utilizado já cadastrado!', errorCode);
    console.log(errorCode +':'+ errorMessage)
    const email = error.customData.email;
    // The AuthCredential type that was used.
    console.log(email)
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(credential)
  });
  }

  //*Login User e Senha*//
  function LoginUsuario(){
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user
        setSuccess(<Navigate to="/Cliente" />);
        setError(null);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));

        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMensage = error.message;
        setError('Usuário/Senha incorretos!', errorCode);
        setSuccess(null);
        console.log(errorCode, errorMensage)
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
              <span type="button" onClick={LoginGoogle}><i className="fab fa-google-plus-square" alt="Login com Google"></i></span>;
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