import React, { Component } from 'react';

//Image URL's
import img from "../../img/css3.png";

//Components
import NavigationBar from '../../comp/navigation-bar/NavigationBar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import PostFetcher from '../../comp/post-fetcher/PostFetcher';
import Footer from '../../comp/footer/Footer.js';

const info = `
É uma linguagem declarativa que controla a apresentação visual de páginas web em um navegador. O navegador aplica as declarações de estilo CSS aos elementos selecionados para exibi-los apropriadamente. Uma declaração de estilo contem as propriedades e seus valores, que determinam a aparência de uma página web.
`
const code = `
    .page-cards{
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-top: 250px;
    }
    .card{
        display: inline-block !important;
        width: 20vh;
        max-height: 50vh;
        margin: 0 0 0 1vh;
        border-radius: 0 !important;
        color: black;
        text-decoration: none;
    }
    .card:hover{
        border-radius: 5px !important;
        border-color: grey;
        color: black;
        text-decoration: none;
    }
`

class CssPage extends Component{
    render() {
        return (
            <div className = "css3-page">
                <NavigationBar />
                <TechInfoBar 
                    techUrl = {img} 
                    color = '#28A4D8' 
                    info = {info} />
                <TechCodeBlock
                    code={code}
                    language="css"
                />
                <div className = "user-posts">
                    <PostFetcher postId = '44' />
                    <PostFetcher postId = '15' />
                    <PostFetcher postId = '26' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default CssPage;