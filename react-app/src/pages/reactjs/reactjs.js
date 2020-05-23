import React, { Component } from 'react';

import img from "../../img/reactjs.png";

import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import Footer from '../../comp/footer/Footer.js';


class ReactPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar techUrl = {img} color = '#8DD1FB' info = 'O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.'/>
                <Footer />
            </React.StrictMode>
        );
    }
}

export default ReactPage;