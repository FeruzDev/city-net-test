import React, {Component} from 'react';
import Ads from "./Ads";

class AdsItem extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="adsItem">
                <div className="aboutBackFon">
                    <h2>Oбъявление</h2>
                </div>
                <div className="addList">
                    <Ads></Ads>
                    <Ads></Ads>
                    <Ads></Ads>
                    <Ads></Ads>
                    <Ads></Ads>
                    <Ads></Ads>
                    <Ads></Ads>
                </div>
            </div>
        );
    }
}

export default AdsItem;