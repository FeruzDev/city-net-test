import React, {Component} from 'react';
import HomeCarousel from "./HomeCarousel";
import Reccom from "./Reccom";
import Platform from "./Platform";
import Partners from "../../component/Partners";
import NavbarShopping from "./NavbarShopping";
import '../../component/main.css'
import ProductFooter from "./ProductFooter";
import VideoPlayer from "./VideoPlayer";
import AboutCompany from "../../container/AboutCompany";

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

                <VideoPlayer></VideoPlayer>
                <AboutCompany></AboutCompany>


                <Platform></Platform>
                <Partners></Partners>


                <ProductFooter />

            </div>
        );
    }
}

export default MainProduct;