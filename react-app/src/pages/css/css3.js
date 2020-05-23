import React, { Component } from 'react';

import img from "../../img/css3.png";

import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import Footer from '../../comp/footer/Footer.js';



class CssPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar techUrl = {img} color = '#28A4D8' info = 'É uma linguagem declarativa que controla a apresentação visual de páginas web em um navegador. O navegador aplica as declarações de estilo CSS aos elementos selecionados para exibi-los apropriadamente. Uma declaração de estilo contem as propriedades e seus valores, que determinam a aparência de uma página web.' />
                <Footer />
            </React.StrictMode>
        );
    }
}

export default CssPage;