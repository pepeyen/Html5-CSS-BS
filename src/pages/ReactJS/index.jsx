import React from 'react';

//Image URL's
import img from "../../assets/reactjs.png";

//Components
import Navbar from '../../components/Navbar';
import TechInfoBar from '../../components/Tech/TechInfoBar';
import TechCodeBlock  from '../../components/Tech/TechCodeBlock';
import PostFetcher from '../../components/Posts';
import Footer from '../../components/Footer';

function ReactJS() {
    const info = `
    React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.
    `
    const code = `
    import React, { Component } from 'react';
    
    //Styles
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
    return (
        <React.Fragment>
            <Navbar language="jsx" />
            <main>
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
                    <PostFetcher 
                        postMinRange={0} 
                        postMaxRange={10}
                    /> 
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default ReactJS;