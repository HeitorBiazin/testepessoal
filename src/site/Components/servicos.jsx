import React from 'react';
import { Link } from 'react-router-dom';


function Servicos(){
        return <section id="Servicos">
            <div className="container-fluid">
                <div className="card-deck mb-5 mr-3 ml-3 text-center">
                    <div className="card card2 mb-4 box-shadow animationFadeIn">
                        <div className="cardborder">
                            <h4 className="my-0 font-weight-normal">Landing Pages</h4>
                        </div>
                        <div className="card-body ">
                            <h1 className="card-title pricing-card-title">R$470,00 <small className="text-muted"></small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>Melhora a taxa de conversão</li>
                                            <li>Facilita a segmentação do público-alvo</li>
                                            <li>Experiência de usuário melhor</li>
                                            <li>Facilita a mensuração de resultados</li>
                                            <li>Melhor classificação nas buscas</li>
                                        </ul>
                                <img src="images/land500.png" alt="Página pessoal" className='imglanding'/>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                    <div className="card card2 mb-4 animationFadeIn">
                        <div className="cardborder">
                            <h4 className="my-0 font-weight-normal">Sistema de Frete</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <img src="images/frete500.png" alt="Sistema de frete" className='imgfrete'/>

                                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                    <div className="card card2 mb-4 box-shadow animationFadeIn">
                        <div className="cardborder">
                            <h4 className="my-0 font-weight-normal">Cadastros</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <img src="images/cadastro500.png" alt="Cadastro fornecedor e produtos" className='imgcadastro'/>

                                    <Link to="/cadastro"><button type="button" className="btn btn-lg btn-block btn-outline-primary">Demo View</button></Link>
                        </div>
                    </div>
                </div>
            </div>   
        </section>;
    }
export default Servicos;   