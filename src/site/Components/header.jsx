import React, { Component} from 'react';
import {Link} from 'react-router-dom'



/* Barra de menu */
class Header extends Component {
    render(){
        return (
            <>
             <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                    
                <div className="container-fluid">    
                    
                                                   
                    <Link to="/"><a className="navbar-brand" href="/#"><img src="images/hblogo.png" alt="hblogo" /> Sistemas</a></Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                            <Link to="/" className="nav-link active">Home <span className="sr-only">(página atual)</span></Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/#">Sistemas</a>
                            </li>
                    
                            <li className="nav-item">
                                 <a className="nav-link" href="/#">Contato</a>
                            </li>
                        </ul>
                                
                    </div>
                    
                </div>       
            </nav>
            </>
        
         );
    }
}
export default Header;    