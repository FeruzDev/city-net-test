import React, {Component} from 'react';
import Choose from "./Choose";
import AboutCompany from "../container/AboutCompany";
import Company from "../component/Company";
import Partners from "../component/Partners";
import Footer from "../component/Footer";
import Client from "../component/Client";
import ChooseCards from "./ChooseCards";



class MainChoose extends Component {
    render() {
        return (
            <div>


                <Choose></Choose>
                <Company></Company>
                <Partners></Partners>
                <AboutCompany></AboutCompany>
                <ChooseCards></ChooseCards>
                <Client></Client>
                <Footer></Footer>
            </div>
        );
    }
}

export default MainChoose;