import React from 'react';

//Image URL's
import img from "../../assets/html5.png";

//Components
import Navbar from '../../components/Navbar';
import TechInfoBar from '../../components/Tech/TechInfoBar';
import TechCodeBlock  from '../../components/Tech/TechCodeBlock';
import PostFetcher from '../../components/Posts';
import Footer from '../../components/Footer';

function Html() {
    const info = `
        HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and latest major version of HTML that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard and is maintained by a consortium of the major browser vendors.
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

    return (
        <React.Fragment>
            <Navbar language = 'html' />
            <main>
                <TechInfoBar 
                    color= '#eb907a' 
                    techUrl = {img} 
                    info = {info}
                />
                <TechCodeBlock
                    code = {code}
                    language = 'html'
                />
                <div className = "user-posts">
                <PostFetcher 
                    postMinRange={12} 
                    postMaxRange={18}
                /> 
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Html;