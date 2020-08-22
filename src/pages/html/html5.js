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

class HtmlPage extends Component{
    render() {
        return (
            <div className = "html5-page">
                <Navbar language = 'html' />
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