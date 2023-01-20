import React from 'react';
import {Link} from 'react-router-dom'


function Banner(){
        return <section id="Banner">
                <div className="container-fluid">
                                        
                    <div className="row">
            
                        <div className="col-lg-5 bannerop">
                            <h1>Quem somos?</h1>
                            <p>A HB Sistemas é a sua solução para criação de landing pages profissionais 
                                e otimização de websites. Oferecemos modelos de design atraentes, 
                                além de suporte técnico e de marketing para maximizar
                                o sucesso de suas páginas de destino. Experimente a HB Sistemas hoje mesmo</p>
                            <Link to="/Login"><button type='button' className='btn btn-primary btn-login'>Fazer login</button></Link>
                            <Link to="/criar"><button type='button' className='btn btn-secondary btn-criarconta'>Criar Conta</button></Link>
                        </div>


                        <div className="col-lg-5">
                            <img src="images/HBSbanner.png" alt= "Sistema Banner"/>

                        </div>
                    </div>
                                      
                
                </div>
        </section>
    }
export default Banner;   