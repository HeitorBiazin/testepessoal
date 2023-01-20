import React, { useState } from 'react';
import Footer from '../../site/Components/footer';
import Header from '../../site/Components/header';
import "./cadastro.css";


import { getFirestore, collection, addDoc} from '@firebase/firestore';

const ProductForm = () => {
  const [product, setProduct] = useState({
    code: Math.floor('100'+ Math.random()*1000),
    name: '',
    description: '',
    price: '',
    value: '',
    supplier: '',
    height: '',
    width: '',
    length: '',
    weight: ''
    
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value
    });
  }

  const db = getFirestore();
  const collectionProduct = collection(db, "product");

  const handleSubmit = (event) => {
    event.preventDefault()
        // Aqui você pode enviar os dados do formulário para o seu servidor ou processá-los de alguma outra maneira
      addDoc(collectionProduct,{
        product
      })
      .then(doc => console.log('Produto criado com sucesso ID:', doc.id))
      .catch(console.log)
  
  }


    return <section id="ProductForm">
      <div className='container bg-primary'> 
        <form onSubmit={handleSubmit}>
            <div className='row'> 
                <h1>Cadastro de Produtos</h1>   
                <div className="form-group-sm codigop col-lg-3">
                        <label>Código</label>
                            <input type="number" disabled name="code" value={product.code} onChange={handleChange} className="form-control disable" />
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
                    <label>Necessário informar fornecedor para calculo do frete <br />
                            *Apenas em Dropshipping</label>
                        <select name="supplier" value={product.supplier} onChange={handleChange} className="form-control">
                            <option value="">Selecione um fornecedor</option>
                            <option value="supplier1">Minha Loja</option>
                            <option value="supplier2">Fornecedor SP</option>
                            <option value="supplier3">Fornecedor RS</option>
                        </select>
                        <a href="/cadastro"><p className='btn btn-secondary mt-2'>Cadastrar Fornecedor</p></a>
                </div>


                <p>Especificações necessárias para calculo correto do frete nos correios.</p>
                <div className="form-group alturap">
                        <label>Altura</label>
                        <input type="number" name="height" value={product.height} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group largurap">
                        <label>Largura</label>
                        <input type="number" name="width" value={product.width} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group comprimentop">
                        <label>Comprimento</label>
                        <input type="number" name="length" value={product.length} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group pesop">
                        <label>Peso</label>
                        <input type="number" name="weight" value={product.weight} onChange={handleChange} className="form-control" />
                </div>
                <button type='submit'>Cadastrar Produto</button>
                
                
        </form>
      </div>
  </section>;
}

function Cadastro (){
    return (
        <div>
            <Header  />
            <ProductForm />
            <Footer  />
        </div>
    );
}
export default Cadastro;

