import React, { Component } from 'react';

//CSS
import './index.css';

//Components
import NavigationBar from '../comp/navigation-bar/NavigationBar.js';
import Cards from '../comp/cards/Cards.js';
import Footer from '../comp/footer/Footer.js';

class MainPage extends Component{
    render() {
        return (
            <div className = "main-page">
                <NavigationBar cartState = 'hidden' />
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default MainPage;