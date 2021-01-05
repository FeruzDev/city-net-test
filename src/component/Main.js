import React, {Component} from 'react';
import Ads from "./Ads";
import RecBox from "./RecBox";
import Counter from "./Counter";
import Price from "./Price";
import Partners from "./Partners";
import News from "./News";
import Client from "./Client";
import Company from "./Company";
import Home from "./Home";

class Main extends Component {
    render() {
        return (
            <div>
                <Home></Home>
                <Ads></Ads>
                <RecBox></RecBox>
                <Counter></Counter>
                <Company></Company>
                <Price></Price>
                <Client></Client>
                <News></News>
                <Partners></Partners>

            </div>
        );
    }
}

export default Main;