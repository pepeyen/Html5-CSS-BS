import React, { Component } from 'react';

import img from "../../img/php.png";

import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import Footer from '../../comp/footer/Footer.js';


class PhpPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar techUrl = {img} color = '#7377AD' info = 'É uma linguagem de script do lado do servidor de código aberto que pode ser ultilizada junto com HTML para construir aplicações web e sites dinâmicos.A melhor coisa em usar o PHP é que ele é extremamente simples para um iniciante, mas oferece muitos recursos avançados para um programador profissional.'/>
                <Footer />
            </React.StrictMode>
        );
    }
}

export default PhpPage;