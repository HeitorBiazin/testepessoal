import React, { useState } from 'react';
import "./cadastro.css";
import Header from '../site/Components/header';
import Footer from '../site/Components/footer';


const ProductForm = () => {
  const [product, setProduct] = useState({
    code: '',
    name: '',
    description: '',
    price: '',
    value: '',
    supplier: '',
    specifications: {
      height: '',
      width: '',
      length: '',
      weight: ''
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value
    });
  }

  const handleSpecChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      specifications: {
        ...product.specifications,
        [name]: value
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o seu servidor ou processá-los de alguma outra maneira
  }


  const HeroWaves = () => {
    return (
      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
        </g>
      </svg>
    );
  }
  




    
  return <section id="ProductForm">
    <>
    <Header/>
    <HeroWaves/>
    </>
   <div className='container bg-dark'> 
        <form onSubmit={handleSubmit}>
            <div className='row'>    
                <div className="form-group-sm codigop col-lg-3">
                        <label>Código</label>
                            <input type="text" name="code" value={product.code} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group-sm nomep col-lg-9">
                        <label>Nome do produto</label>
                        <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" />
                </div>
            </div>    
                <div className="form-group-lg descp">
                    <label>Descrição do produto</label>
                        <textarea name="description" value={product.description} onChange={handleChange} className="form-control" />
                </div>
             <div className='row'>   
                <div className="form-group precop">
                        <label>Preço</label>
                        <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group valorp">
                        <label>Valor</label>
                        <input type="number" name="value" value={product.value} onChange={handleChange} className="form-control" />
                </div>
            </div>
                <div className="form-group fornp">
                    <label>Fornecedor</label>
                        <select name="supplier" value={product.supplier} onChange={handleChange} className="form-control">
                            <option value="">Selecione um fornecedor</option>
                            <option value="supplier1">Fornecedor 1</option>
                            <option value="supplier2">Fornecedor 2</option>
                            <option value="supplier3">Fornecedor 3</option>
                        </select>
                </div>
        </form>
  </div>
  </section>;
}

function Cadastro (){
    return (
        <div>
            <ProductForm />
        </div>
    );
}
export default Cadastro;

