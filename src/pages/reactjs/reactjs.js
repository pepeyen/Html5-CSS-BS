import React from 'react';

//Image URL's
import img from "../../img/reactjs.png";

//Components
import Navbar from '../../comp/navbar/Navbar.js';
import TechInfoBar from '../../comp/tech/TechInfoBar.js';
import TechCodeBlock  from '../../comp/tech/TechCodeBlock.js';
import PostFetcher from '../../comp/post-fetcher/PostFetcher';
import Footer from '../../comp/footer/Footer.js';

const info = `
React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.
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
            <div className = "reactjs-page">
                <Navbar language="jsx" />
                <TechInfoBar 
                    techUrl = {img} 
                    color = '#8DD1FB' 
                    info = {info}
                />
                <TechCodeBlock
                    code={code}
                    language="jsx"
                />
                <div className = "user-posts">
                    <PostFetcher postId = '10' />
                    <PostFetcher postId = '32' />
                    <PostFetcher postId = '50' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default ReactPage;