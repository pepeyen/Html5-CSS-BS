import React from 'react';

//Multi-Page plugin
import {  
    Route,
    Switch,
    Redirect,
} from "react-router-dom"; 

//Styles
import './App.css';

//Pages
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Php from "./pages/Php";
import Jsf from "./pages/Jsf";
import ReactJS from "./pages/ReactJS";
import NotFound from "./pages/error";

function App() {
    return (
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/course/html5" component = {Html} />
            <Route exact path = "/course/css3" component = {Css} />
            <Route exact path = "/course/php" component = {Php} />
            <Route exact path = "/course/jsf" component = {Jsf} />
            <Route exact path = "/course/reactjs" component = {ReactJS} />
            <Route path = "/error/404" component = {NotFound} />
            <Redirect to = "/error/404" />
        </Switch>
    );
}

export default App;