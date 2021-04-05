import React, {Component} from 'react';
import Price from "../component/Price";
import Client from "../component/Client";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import axios from "axios";
import {API_PATH} from "../tools/constants";

class AboutPrice extends Component {

    constructor() {
        super();
        this.state ={
            posts: [],
            post: {}
        }
    }


    componentDidMount() {
        axios.get(API_PATH  + "tariff-item-list/")
            .then(res => {
                this.setState({posts: res.data.results})

            });




        axios.get(API_PATH  + "tariff-header-list/")
            .then(res => {
                this.setState({post: res.data.results})
                console.log(res)
            });




        window.scrollTo(0, 0);

    }



    render() {

        return (
          <div>
              <Navbar/>
              <div className="aboutBackFon">
                  <h2>Все Тарифы</h2>
              </div>



              <div className="AboutPrice">

                <div className="container">
                    <h1 className="aboutPrivceTitle">{this.state.post[0] ? this.state.post[0].title : ""}</h1>
                    <p dangerouslySetInnerHTML={{ __html: this.state.post[0] ? this.state.post[0].content : "" }}  />


                </div>
                  <Price />

                <div className="container">

                    <h1>О наших тарифах для магазина</h1>
                    <p>Citynet - универсальный оператор связи для бизнеса,
                        оказывающий услуги в режиме персонального телеком-ателье для предприятий всех отраслей</p>



                    <h1>О наших тарифах для бизнеса</h1>
                    <p>Citynet - универсальный оператор связи для бизнеса,
                        оказывающий услуги в режиме персонального телеком-ателье для предприятий всех отраслей</p>

                </div>
                  <Client/>

              </div>

              <Footer/>

          </div>
        );
    }
}

export default AboutPrice;