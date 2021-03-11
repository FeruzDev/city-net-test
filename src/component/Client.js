import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Client extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 0,
            cssEase: "linear"
        };
        return (
            <div className="container-fluid">
                <div className="clients">
                    <h2>Наши Лучшие Клиенты</h2>
                    <Slider {...settings}>
                        <div className="clientItem">
                            <img src="/img/clients/akfa.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/akfa-medline.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/atlas.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/crafers.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/durable.jpg" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/grt.jpg" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/logo2.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/mediapark.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/olmazor.jpg" alt=""/>
                        </div>

                        <div className="clientItem">
                            <img src="/img/clients/Poytaxt-bank-logo.png" alt=""/>
                        </div>
                        <div className="clientItem">
                            <img src="/img/clients/qanotchi.png" alt=""/>
                        </div>

                        <div className="clientItem">
                            <img src="/img/clients/compas.png" alt=""/>
                        </div>


                    </Slider>
                </div>
            </div>
        );
    }
}