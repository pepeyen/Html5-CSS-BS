import React, { Component } from 'react';

import img from "../../img/html5.png";

import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock from '../../comp/tech/TechCodeBlock.js';
import Footer from '../../comp/footer/Footer.js';



class HtmlPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar techUrl = {img} color= '#eb907a' info = 'É uma nova versão da linguagem HTML, com novos elementos, atributos, e comportamentos e um conjunto maior de tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos. Este conjunto é chamado HTML5 & friends e muitas vezes abreviado apenas como HTML5.'/>
                <TechCodeBlock info = 'YO'/>
                <Footer />
            </React.StrictMode>
        );
    }
}

export default HtmlPage;