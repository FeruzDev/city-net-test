import React, {Component} from 'react';
import Price from "../component/Price";
import Client from "../component/Client";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

class AboutPrice extends Component {



    componentDidMount() {
        window.scrollTo(0, 0);
    }



    render() {

        return (
          <div>



              <Navbar></Navbar>

              <div className="AboutPrice">
                  <div className="aboutBackFon">
                      <h2>Все Тарифы</h2>
                  </div>
                <div className="container">
                    <h1 className="aboutPrivceTitle">О наших тарифах для личного</h1>

                    <p>CityNet всегда шагает в ногу со временем, динамично развивается и остается лидером своем сегменте.
                        Ранее предпринятые меры позволили снизить стоимость тарифных планов до оптимальных и доступных
                        отметок. Сейчас сфера деятельности компании охватывает всю территорию города Ташкент и некоторые из
                        ближних регионов.</p>
                </div>
                  <Price ></Price>

                <div className="container">
                    <h1>О наших тарифах для магазина</h1>
                    <p>Citynet - универсальный оператор связи для бизнеса, <br/>оказывающий услуги в режиме персонального
                        телеком-ателье для предприятий всех отраслей</p>
                    <h1>О наших тарифах для бизнеса</h1>
                    <p>Citynet - универсальный оператор связи для бизнеса, <br/>оказывающий услуги в режиме персонального
                        телеком-ателье для предприятий всех отраслей</p>

                </div>
                  <Client></Client>

              </div>

              <Footer></Footer>

          </div>
        );
    }
}

export default AboutPrice;