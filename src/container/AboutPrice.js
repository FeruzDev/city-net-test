import React, {Component} from 'react';
import Price from "../component/Price";
import Client from "../component/Client";

class AboutPrice extends Component {

    render() {

        return (
            <div className="AboutPrice">
                <div className="aboutBackFon">
                    <h2>Все Тарифы</h2>
                </div>
                {/*<img className="BackLeft" src="img\backFon.svg" alt=""/>*/}
                <h1 className="aboutPrivceTitle">О наших тарифах для личного</h1>

                <p>CityNet всегда шагает в ногу со временем, динамично развивается и остается лидером своем сегменте.
                    Ранее предпринятые меры позволили снизить стоимость тарифных планов до оптимальных и доступных
                    отметок. Сейчас сфера деятельности компании охватывает всю территорию города Ташкент и некоторые из
                    ближних регионов.</p>
                <Price ></Price>
                {/*<img className="BackRight" src="img\backFon.svg" alt=""/>*/}

                <h1>О наших тарифах для магазина</h1>
                <p>Citynet - универсальный оператор связи для бизнеса, <br/>оказывающий услуги в режиме персонального
                    телеком-ателье для предприятий всех отраслей</p>
                <h1>О наших тарифах для бизнеса</h1>
                <p>Citynet - универсальный оператор связи для бизнеса, <br/>оказывающий услуги в режиме персонального
                    телеком-ателье для предприятий всех отраслей</p>

                <Client></Client>

            </div>
        );
    }
}

export default AboutPrice;