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
import ProductAboutCompany from "./Products/ProductAboutCompany";
import ProductCarousel from "./addNewProductPage/ProductCarousel";
import SmartRoom from "./addNewProductPage/SmartRoom";
import SmartRoomBanner from "./addNewProductPage/SmartRoomBanner";
import System from "./addNewProductPage/System";



class MainProduct extends Component {



    componentDidMount() {
        window.scrollTo(0, 0);
    }




    render() {
        return (
            <div style={{overflow: "hidden"}}>

                <NavbarShopping />
                <HomeCarousel/>
                <ProductCarousel />

                <VideoPlayer/>
                <System />
                <Reccom/>

                <SmartRoomBanner />
                <SmartRoom />
                <ProductAboutCompany/>



                <Platform/>
                <Partners/>

                <ProductFooter />

            </div>
        );
    }
}

export default MainProduct;