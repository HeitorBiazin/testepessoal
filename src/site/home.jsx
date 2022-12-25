import React, { Component } from 'react';

import Header from './Components/header';
import Banner from './Components/banner';
import Servicos from './Components/servicos';
import Footer from './Components/footer'
import Portfolio from './porfolio';


/*Pagina /home */
class Site extends Component {
  render(){
    return (
      <>
        <Header/>
        <Banner/>
        <Servicos/>
        <Portfolio/>
        <Footer/>
      </>
    )
  }
}
export default Site;    