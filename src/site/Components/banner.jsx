import React from 'react';
import {Link} from 'react-router-dom'


function Banner(){
        return <section id="Banner">
                <div className="container-fluid">
                                        
                    <div className="row">
            
                        <div className="col-lg-5 bannerop animationFadeIn">
                            <h1>Quem somos?</h1>
                            <p>A HB Sistemas é a sua solução para criação de landing pages profissionais 
                                e otimização de websites. Oferecemos modelos de design atraentes, 
                                além de suporte técnico e de marketing para maximizar
                                o sucesso de suas páginas de destino. Experimente a HB Sistemas hoje mesmo</p>
                            <Link to="/app"><button type='button' className='btn btn-primary btn-login'>Fazer login</button></Link>
                            <Link to="/criar"><button type='button' className='btn btn-secondary btn-criarconta'>Criar Conta</button></Link>
                        </div>


                        <div className="col-lg-5">
                            <img src="images/HBSbanner.png" alt= "Sistema Banner"/>

                        </div>
                    </div>
                
                    
                        <svg class="waves-fluid" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g class="parallax">
                               <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                               <use xlinkHhref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                               <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                            </g>
                        </svg>
                    
                
                </div>
        </section>
    }
export default Banner;   