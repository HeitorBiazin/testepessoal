import React from 'react';
import Carousel from './Components/carousel';

const images = [
    "images/portfolioex.jpg",
    "images/sistemabanner.png",
    "images/portfolioex.jpg",
  ];

function Portfolio(){
        return <section id="Portfolio">
            <div className="container-fluid">
             <h1 className='txtport'>Alguns dos Nossos Clientes</h1>
             <Carousel images={images} />
                
            </div>
        </section>
    }
export default Portfolio;   