import React from 'react';

//Image URL's
import img from "../../img/reactjs.png";

//Components
import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import Footer from '../../comp/footer/Footer.js';

const info = `
    O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.
`
const code = `
import React, { Component } from 'react';

//CSS
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "page-footer">
                    <div className = "footer-content --light"> Made by <a href = "https://github.com/pepeyen" target = "_blank" rel="noopener noreferrer">Erick</a> with love :3</div>            
                </div>
            </React.Fragment>         
        );
    }
}

export default Footer;
`

class ReactPage extends React.Component {

    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar 
                    techUrl = {img} 
                    color = '#8DD1FB' 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="jsx"
                />
                <Footer />
            </React.StrictMode>
        );
    }
}

export default ReactPage;