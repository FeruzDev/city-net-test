import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import Reccom from "./Reccom";
import ShoppingCard from "./ShoppingCard";
import ShoppingContact from "./ShoppingContact";
import Reviews from "./Reviews";
import Platform from "./Platform";
import Partners from "../../component/Partners";
import NavbarShopping from "./NavbarShopping";
import '../../component/main.css'
import ProductFooter from "./ProductFooter";

class MainProduct extends Component {



    componentDidMount() {
        window.scrollTo(0, 0);
    }




    render() {
        return (
            <div>

                <NavbarShopping />
                <HomeCarousel></HomeCarousel>
                <Reccom></Reccom>
                <ShoppingCard></ShoppingCard>
                <ShoppingContact></ShoppingContact>
                <Reviews></Reviews>
                <Platform></Platform>
                <Partners></Partners>


                <ProductFooter />

            </div>
        );
    }
}

export default MainProduct;