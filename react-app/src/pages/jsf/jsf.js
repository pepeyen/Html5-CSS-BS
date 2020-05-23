import React, { Component } from 'react';

import img from "../../img/jsf.png";

import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import Footer from '../../comp/footer/Footer.js';



class JsfPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar techUrl = {img} color = '#FBAC2A' info = 'É ramework onde é efetuada a elaboração de interfaces de usuários para sistema web, colocando componentes em um formulário e ligando os a objetos Java, sendo assim  ele faz a separação entre a lógica e regras de negocio a navegação e conexões com serviços externos seguindo o modelo MVC.'/>
                <Footer />
            </React.StrictMode>
        );
    }
}

export default JsfPage;