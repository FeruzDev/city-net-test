import React, {Component} from 'react';
import MainAds from "./MainAds";
import RecBox from "./RecBox";
import Counter from "./Counter";
import Price from "./Price";
import Partners from "./Partners";
import News from "./News";
import Client from "./Client";

import Home from "./Home";
import Footer from "./Footer";

class Main extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Home></Home>
                <MainAds></MainAds>
                <RecBox></RecBox>
                <Counter></Counter>

                <Price></Price>
                {/*<Client></Client>*/}
                <News></News>
                {/*<Partners></Partners>*/}

                <Footer></Footer>
            </div>
        );
    }
}

export default Main;