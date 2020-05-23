import React, { Component } from 'react';

//Multi-Page plugin
import { 
    BrowserRouter as Router, 
    Route, 
    Switch,  
    Redirect
} from "react-router-dom"; 

//Pages
import MainPage from "./pages/index.js";
import HtmlPage from "./pages/html/html5.js";
import CssPage from "./pages/css/css3.js";
import PhpPage from "./pages/php/php.js";
import JsfPage from "./pages/jsf/jsf.js";
import ReactPage from "./pages/reactjs/reactjs.js";
import NotFoundPage from "./pages/error/404.js";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = "/" component = {MainPage} />
                    <Route exact path = "/pages/html5" component = {HtmlPage} />
                    <Route exact path = "/pages/css3" component = {CssPage} />
                    <Route exact path = "/pages/php" component = {PhpPage} />
                    <Route exact path = "/pages/jsf" component = {JsfPage} />
                    <Route exact path = "/pages/reactjs" component = {ReactPage} />
                    <Route component = {NotFoundPage} />
                    <Redirect to = "pages/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;