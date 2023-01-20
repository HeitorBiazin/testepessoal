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
                            <h1 className="card-title pricing-card-title">A partir de R$250,00 <small className="text-muted"></small></h1>
                                        <ul className="list-unstyled mt-4 mb-4">
                                            <li>Melhora a taxa de conversão</li>
                                            <li>Facilita a segmentação do público-alvo</li>
                                            <li>Experiência de usuário melhor</li>
                                            <li>Facilita a mensuração de resultados</li>
                                            <li>Melhor classificação nas buscas</li>
                                        </ul>
                                <img src="images/landpage.png" alt="Página pessoal" className='imglanding'/>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Saiba Mais</button>
                        </div>
                    </div>
                    <div className="card card2 mb-4 animationFadeIn">
                        <div className="cardborder">
                            <h4 className="my-0 font-weight-normal">Loja de Dropshipping</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$1200,00 <small className="text-muted">/ano</small></h1>
                                <ul className='list-unstyled mt-4 mb-4'>
                                    <li>Cálculo de Frete Especial</li>
                                    <li>Criação de Etiquetas de Envio</li>
                                    <li>Cadastro de Produtos ilimitados</li>
                                    <li>Melhor controle das vendas</li>
                                    <li>Todos seus fornecedores em uma loja</li>
                                </ul>
                            <img src="images/loja.png" alt="Sistema de frete" className='imgfrete'/>

                                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Saiba Mais</button>
                        </div>
                    </div>
                    <div className="card card2 mb-4 box-shadow animationFadeIn">
                        <div className="cardborder">
                            <h4 className="my-0 font-weight-normal">Cadastros</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <ul>
                                <li>texto</li>
                                <li>texto</li>
                                <li>texto</li>
                                <li>texto</li>
                                <li>texto</li>
                            </ul>
                            <img src="images/Agenda.png" alt="Cadastro fornecedor e produtos" className='imgcadastro'/>

                                    <Link to="/cadastro"><button type="button" className="btn btn-lg btn-block btn-outline-primary">Saiba Mais</button></Link>
                        </div>
                    </div>
                </div>
            </div>   
        </section>;
    }
export default Servicos;   