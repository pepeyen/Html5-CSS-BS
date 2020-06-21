import React, { Component } from 'react';

//Multi-Page plugin
import {  
    Route,
    Switch,
    Redirect,
} from "react-router-dom"; 

//CSS
import './App.css';

//Pages
import MainPage from "./pages/index";
import HtmlPage from "./pages/html/html5";
import CssPage from "./pages/css/css3";
import PhpPage from "./pages/php/php";
import JsfPage from "./pages/jsf/jsf";
import ReactPage from "./pages/reactjs/reactjs";
import CartPage from "./pages/cart/cart";
import NotFoundPage from "./pages/error/404";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component = {MainPage} />
                <Route path = "/pages/html5"component = {HtmlPage} />
                <Route path = "/pages/css3" component = {CssPage} />
                <Route path = "/pages/php" component = {PhpPage} />
                <Route path = "/pages/jsf" component = {JsfPage} />
                <Route path = "/pages/reactjs" component = {ReactPage} />
                <Route path = "/pages/cart" component = {CartPage} />
                <Route path = "/404" component = {NotFoundPage} />
                <Redirect to = "/404" />
            </Switch>
        );
    }
}

export default App;