import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import "semantic-ui-css/semantic.min.css";
import Home from "./component/Home";

import Footer from "./component/Footer";

import Navbar from "./component/Navbar";
import AboutCompany from "./container/AboutCompany";

import Contact from "./component/Contact";
import AboutPrice from "./container/AboutPrice";
import AboutNews from "./container/AboutNews";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from "./component/Main";


ReactDOM.render(
    <React.StrictMode>


        <Router>
            <Navbar/>
            {/*<Home/>*/}

            <Switch>

                <Route exact path="/">

                    <Main/>
                </Route>
                <Route exact path="/company">
                    <AboutCompany/>
                </Route>
                <Route exact path="/tariff" component={AboutPrice}/>

                <Route exact path="/news" component={AboutNews}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Router>


        <Footer/>


    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

