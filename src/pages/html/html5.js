import React, { Component } from 'react';

//Image URL's
import img from "../../img/html5.png";

//Components
import Navbar from '../../comp/navbar/Navbar';
import TechInfoBar from '../../comp/tech/TechInfoBar';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock';
import PostFetcher from '../../comp/post-fetcher/PostFetcher';
import Footer from '../../comp/footer/Footer';

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
            <div className = "html5-page">
                <Navbar />
                <TechInfoBar 
                    color= '#eb907a' 
                    techUrl = {img} 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="html"
                />
                <div className = "user-posts">
                    <PostFetcher postId = '8' />
                    <PostFetcher postId = '2' />
                    <PostFetcher postId = '3' />
                    <PostFetcher postId = '4' />
                    <PostFetcher postId = '5' />
                    <PostFetcher postId = '6' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default HtmlPage;