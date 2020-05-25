import React, { Component } from 'react';

//Image URL's
import img from "../../img/html5.png";

//Components
import MainNavbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import Footer from '../../comp/footer/Footer.js';

const info = `
    É uma nova versão da linguagem HTML, com novos elementos, atributos, e comportamentos e um conjunto maior de tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos. Este conjunto é chamado HTML5 & friends e muitas vezes abreviado apenas como HTML5.
`
const code = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <title>CS Tech</title>
  </head>
  <body>
        <nav>
            <ul>
                <li><a href="#"target="_blank">Pagina 1</a></li>
                <li><a href="#"target="_blank">Pagina 2</a></li>
                <li><a href="#"target="_blank">Pagina 3</a></li>
            </ul>
        </nav>
        <section class="container">
            <section class="s1">
                Sessao 1
                <img class="lin" src="imagens/linkedin.png"></a>
            </section>

            <section  class="s2">
                Sessao 2
                <img class="lin" src="imagens/linkedin.png"></a>
            </section>

            <section  class="s3">
                Sessao 3
                <img class="lin" src="imagens/linkedin.png"></a>
            </section>
        </section>
    </body>
</html>
`

class HtmlPage extends Component{
    render() {
        return (
            <React.StrictMode>
                <MainNavbar />
                <TechInfoBar 
                    color= '#eb907a' 
                    techUrl = {img} 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="html"
                />
                <Footer />
            </React.StrictMode>
        );
    }
}

export default HtmlPage;