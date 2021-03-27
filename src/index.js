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
import WhatAreWedoing from "./shopping/component/Products/WhatAreWedoing";
import AdsView from "./component/AdsView";
import MainChoose from "./main/MainChoose";
import TestViewIpTv from "./component/TestViewIpTv";
import TestViewIpPhone from "./component/TestViewIpPhone";
import AboutNewsView from "./container/AboutNewsView";
import Search from "./component/Search";
import SearchPage from "./component/SearchPage";
import AdsSearchPage from "./component/AdsSearchPage";
import ProductAboutNews from "./shopping/component/Products/ProductAboutNews";
import ProductAds from "./shopping/component/Products/ProductAds";
import ProductAboutNewsView from "./shopping/component/Products/ProductAboutNewsView";
import ProductAdsView from "./shopping/component/Products/ProductAdsView";
import ProductSearchPage from "./shopping/component/Products/ProductSearchPage";
import ProductAdsSearchPage from "./shopping/component/Products/ProductAdsSearchPage";
import AboutCompanyView from "./container/AboutCompanyView";


ReactDOM.render(
    <React.StrictMode>




        <Router>

            <Switch>

                <Route exact path="/" component={MainChoose} />

                {/*<Route exact path="/main-provider/company" component={AboutCompany} />*/}

                <Route exact path="/main-provider/tariff" component={AboutPrice}/>

                <Route exact path="/main-provider/view-ip-tv" component={TestViewIpTv}/>
                <Route exact path="/main-provider/view-ip-phone" component={TestViewIpPhone}/>


                <Route exact path="/main-provider/news" component={AboutNews}/>
                <Route exact path="/main-product/news" component={ProductAboutNews}/>

                <Route exact path="/main-provider/ads" component={Ads}/>
                <Route exact path="/main-product/ads" component={ProductAds}/>

                <Route exact path="/main-provider/ads/advertisement-detail/:id" component={AdsView}/>
                <Route exact path="/main-provider/news/news-detail/:id" component={AboutNewsView}/>

                <Route exact path="/main-product/news/news-detail/:id" component={ProductAboutNewsView}/>
                <Route exact path="/main-product/ads/advertisement-detail/:id" component={ProductAdsView}/>


                <Route exact path="/main-provider/contact" component={Contact}/>
                <Route exact path="/main-product/contact" component={ShoppingContact}/>
                <Route exact path="/main-provider/docs" component={Docs} />
                <Route exact path="/main-product/products" component={Products} />
                <Route exact path="/main-product" component={MainProduct} />
                <Route exact path='/main-product/products/WhatAreWedoing/:id' component={WhatAreWedoing}/>
                <Route exact path="/main-provider" component={Main} />
                <Route exact path="/main-provider/news/:search" component={SearchPage} />
                <Route exact path="/main-provider/ads/:search" component={AdsSearchPage} />

                <Route exact path="/main/service-detail/:id" component={AboutCompanyView} />


                <Route exact path="/main-product/news/:search" component={ProductSearchPage} />
                <Route exact path="/main-product/ads/:search" component={ProductAdsSearchPage} />




            </Switch>


        </Router>




    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();

