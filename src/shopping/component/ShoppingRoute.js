import React, {Component} from 'react';
import NavbarShopping from "./NavbarShopping";
import Footer from "../../component/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Choose from "../../main/Choose";
import AboutCompany from "../../container/AboutCompany";
import AboutPrice from "../../container/AboutPrice";
import AboutNews from "../../container/AboutNews";
import AdsItem from "../../component/AdsItem";
import Contact from "../../component/Contact";
import Docs from "../../component/Docs";
import Products from "./Products/Products";
import MainProduct from "./MainProduct";
import Main from "../../component/Main";
import '../../component/main.css'


class ShoppingRoute extends Component {
    render() {
        return (
            <div>
                <NavbarShopping />

                <Switch>

                    <Route exact path="/" component={Choose} />


                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/docs" component={Docs} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path="/main-product" component={MainProduct} />
                    <Route exact path="/main-provider" component={Main} />

                </Switch>


                <Footer/>
            </div>
        );
    }
}

export default ShoppingRoute;