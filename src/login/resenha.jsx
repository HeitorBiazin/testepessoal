import React, {useState}  from 'react';
import Header from '../site/Components/header'
import Footer from '../site/Components/footer';
import { Link } from 'react-router-dom';

import firebase from '../firebase/firebase'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from 'firebase/app';


/*Pagina para enviar e-mail de redefinição de senha */


  const Resenha = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)
    const auth = getAuth();

    function ResetSenha(){
    sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        // Exibe mensagem de sucesso para o usuário
        setSuccess('E-mail de redefinição de senha enviado com sucesso!');
        setError(null);
      })
      .catch((error) => {
        // Exibe mensagem de erro para o usuário
        setError('Usuário não encontrado');
        setSuccess(null);
      });
    }
  

  function altEmail(event){
    setEmail(event.target.value)
  }

  return <section id="Resenha" className='bglogin'>
    <>
    <Header/>
    </>
    <div className="container">
      <div className="d-flex justify-content-center mt-5 h-100">
        <div className="card cardlg mt-5">
          <div className="card-header">
            <h3 className='sing'>Recuperção de Senha</h3>
            
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input onChange={altEmail} type="text" className="form-control" placeholder="E-mail" />
              </div>
                          
              <div className="form-group">
                <input onClick={ResetSenha} type="button" value="Enviar" className="btn float-right login_btn" />
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
export default Resenha;    