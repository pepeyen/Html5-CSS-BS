import React, { Component } from 'react';

//Components
import Cards from '../comp/cards/Cards.js';
import Footer from '../comp/footer/Footer.js';

class MainPage extends Component{
    render() {
        return (
            <div className = "main-page">
                <main>
                    <p className = ""></p>
                    <Cards />
                </main>
                <Footer />
            </div>
        );
    }
}

export default MainPage;