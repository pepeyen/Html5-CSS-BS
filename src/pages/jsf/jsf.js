import React, { Component } from 'react';

//Image URL's
import img from "../../img/jsf.png";

//Components
import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import Footer from '../../comp/footer/Footer.js';


const info = `
    É o framework onde é efetuada a elaboração de interfaces de usuários para sistema web, colocando componentes em um formulário e ligando os a objetos Java, sendo assim  ele faz a separação entre a lógica e regras de negocio a navegação e conexões com serviços externos seguindo o modelo MVC.
`
const code = `
package com.mkyong.common;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;

@ManagedBean
@SessionScoped
public class HelloBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
`


class JsfPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar 
                    techUrl = {img} 
                    color = '#FBAC2A' 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="java"
                    plugins={["line-numbers"]}
                />
                <Footer />
            </React.StrictMode>
        );
    }
}

export default JsfPage;