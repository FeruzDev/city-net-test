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

import Ads from "./component/Ads";
import Docs from "./component/Docs";
import Choose from "./main/Choose";
import Main from "./component/Main";
import HomeCarousel from "./shopping/component/HomeCarousel";
import App from "./component/App";
import Reccom from "./shopping/component/Reccom";
import ShoppingCard from "./shopping/component/ShoppingCard";
import ShoppingContact from "./shopping/component/ShoppingContact";
import Client from "./component/Client";
import Partners from "./component/Partners";
import Platform from "./shopping/component/Platform";
import Reviews from "./shopping/component/Reviews";
import Products from "./shopping/component/Products/Products";
import MainProduct from "./shopping/component/MainProduct";
import ShoppingRoute from "./shopping/component/ShoppingRoute";
import MainProviderComponents from "./component/MainProviderComponents";
import ProductAddress from "./shopping/component/ProductAddress";
import AdsView from "./component/AdsView";


ReactDOM.render(
    <React.StrictMode>




        <Router>
            {/*<NavbarShopping></NavbarShopping>*/}

            {/*<App/>*/}


            {/*<Products></Products>*/}








                {/*<HomeCarousel></HomeCarousel>*/}
                {/*<Reccom></Reccom>*/}
                {/*<ShoppingCard></ShoppingCard>*/}
                {/*<ShoppingContact></ShoppingContact>*/}
                {/*<Reviews></Reviews>*/}
                {/*<Platform></Platform>*/}
                {/*<Partners></Partners>*/}












            {/*<Navbar/>*/}
            {/*<Choose></Choose>*/}

            <Switch>
                {/*<Choose></Choose>*/}

                {/*<Route exact path="/" component={Main} />*/}
                <Route exact path="/" component={Choose} />

                <Route exact path="/main-provider/company" component={AboutCompany} />

                <Route exact path="/main-provider/tariff" component={AboutPrice}/>


                <Route exact path="/main-provider/news" component={AboutNews}/>
                <Route exact path="/main-provider/ads" component={Ads}/>

                <Route exact path="/main-provider/ads/:id" component={AdsView}/>


                <Route exact path="/main-provider/contact" component={Contact}/>
                <Route exact path="/main-product/contact" component={ShoppingContact}/>
                <Route exact path="/main-provider/docs" component={Docs} />
                <Route exact path="/main-product/products" component={Products} />
                <Route exact path="/main-product" component={MainProduct} />
                <Route exact path="/main-product/where-can-buy" component={ProductAddress} />
                {/*<Route exact path="/main-provider" component={Main} />*/}


                <Route exact path="/main-provider" component={Main} />


            </Switch>




            {/*<Footer/>*/}




        </Router>




    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

