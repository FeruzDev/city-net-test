import "semantic-ui-css/semantic.min.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import Footer from "./component/Footer";

import Navbar from "./component/Navbar";
import NavbarShopping from "./shopping/component/NavbarShopping";
import AboutCompany from "./container/AboutCompany";

import Contact from "./component/Contact";
import AboutPrice from "./container/AboutPrice";
import AboutNews from "./container/AboutNews";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AdsItem from "./component/AdsItem";
import Docs from "./component/Docs";
import Choose from "./main/Choose";
import Main from "./component/Main";
import HomeCarousel from "./shopping/component/HomeCarousel";
import App from "./component/App";
import Reccom from "./shopping/component/Reccom";
import ShoppingCard from "./shopping/component/ShoppingCard";
import ShoppingContact from "./shopping/component/ShoppingContact";


ReactDOM.render(
    <React.StrictMode>




        <Router>
            <NavbarShopping></NavbarShopping>

            {/*<App/>*/}

            <HomeCarousel></HomeCarousel>
            <Reccom></Reccom>
            <ShoppingCard></ShoppingCard>
            <ShoppingContact></ShoppingContact>
            {/*<Choose></Choose>*/}
            {/*<Navbar/>*/}
            {/**/}
            {/*<Switch>*/}
            {/**/}
            {/*    <Route exact path="/" component={Main} />*/}
            {/**/}
            {/**/}
            {/*    <Route exact path="/company" component={AboutCompany} />*/}
            {/**/}
            {/*    <Route exact path="/tariff" component={AboutPrice}/>*/}
            {/**/}
            {/*    <Route exact path="/news" component={AboutNews}/>*/}
            {/*    <Route exact path="/ads" component={AdsItem}/>*/}
            {/*    <Route exact path="/contact" component={Contact}/>*/}
            {/*    <Route exact path="/docs" component={Docs} />*/}
            {/*</Switch>*/}




            {/*<Footer/>*/}




        </Router>




    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

