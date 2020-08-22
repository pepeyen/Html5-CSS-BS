import React from 'react';

//Image URL's
import img from "../../assets/css3.png";

//Components
import Navbar from '../../components/Navbar';
import TechInfoBar from '../../components/Tech/TechInfoBar';
import TechCodeBlock  from '../../components/Tech/TechCodeBlock';
import PostFetcher from '../../components/Posts';
import Footer from '../../components/Footer';

function Css() {
    const info = `
        CSS3 is a style sheet language used for describing the presentation of a document written in a markup language like HTML providing more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content. 
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
    
    return (
        <React.Fragment>
            <Navbar language="css" />
            <main>
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
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Css;