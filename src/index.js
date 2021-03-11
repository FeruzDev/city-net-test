import "semantic-ui-css/semantic.min.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
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
import Main from "./component/Main";
import ShoppingContact from "./shopping/component/ShoppingContact";
import Products from "./shopping/component/Products/Products";
import MainProduct from "./shopping/component/MainProduct";
import ProductAddress from "./shopping/component/ProductAddress";
import WhatAreWedoing from "./shopping/component/Products/WhatAreWedoing";
import AdsView from "./component/AdsView";
import MainChoose from "./main/MainChoose";
import TestViewIpTv from "./component/TestViewIpTv";
import TestViewIpPhone from "./component/TestViewIpPhone";


ReactDOM.render(
    <React.StrictMode>




        <Router>

            <Switch>

                <Route exact path="/" component={MainChoose} />

                <Route exact path="/main-provider/company" component={AboutCompany} />

                <Route exact path="/main-provider/tariff" component={AboutPrice}/>

                <Route exact path="/main-provider/view-ip-tv" component={TestViewIpTv}/>
                <Route exact path="/main-provider/view-ip-phone" component={TestViewIpPhone}/>


                <Route exact path="/main-provider/news" component={AboutNews}/>
                <Route exact path="/main-provider/ads" component={Ads}/>

                <Route exact path="/main-provider/ads/:id" component={AdsView}/>


                <Route exact path="/main-provider/contact" component={Contact}/>
                <Route exact path="/main-product/contact" component={ShoppingContact}/>
                <Route exact path="/main-provider/docs" component={Docs} />
                <Route exact path="/main-product/products" component={Products} />
                <Route exact path="/main-product" component={MainProduct} />
                <Route exact path='/main-product/products/WhatAreWedoing/:id' component={WhatAreWedoing}/>
                <Route exact path="/main-product/where-can-buy" component={ProductAddress} />
                <Route exact path="/main-provider" component={Main} />


            </Switch>


        </Router>




    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

