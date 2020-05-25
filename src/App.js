import React, { Component } from 'react';

//Multi-Page plugin
import {  
    Route,  
    Switch,
    Redirect,
} from "react-router-dom"; 

//Pages
import MainPage from "./pages/index";
import HtmlPage from "./pages/html/html5";
import CssPage from "./pages/css/css3";
import PhpPage from "./pages/php/php";
import JsfPage from "./pages/jsf/jsf";
import ReactPage from "./pages/reactjs/reactjs";
import NotFoundPage from "./pages/error/404";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path = "/" component = {MainPage} />
                    <Route exact path = "/pages/html5"component = {HtmlPage} />
                    <Route exact path = "/pages/css3" component = {CssPage} />
                    <Route exact path = "/pages/php" component = {PhpPage} />
                    <Route exact path = "/pages/jsf" component = {JsfPage} />
                    <Route exact path = "/pages/reactjs" component = {ReactPage} />
                    <Route exact path = "/error/404" component = {NotFoundPage} />
                    <Redirect to = "/error/404" />
                </Switch>
            </div>
        );
    }
}

export default App;