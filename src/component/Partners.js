import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Partners extends Component {
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
            <div className="clients">
                <h2>Наши Лучшие Партнеры</h2>
                <Slider {...settings}>
                    <div className="clientItem">
                        <img src="/img/partners/bosch.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/cisco.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/dell.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/Helvar-Logo.jpg" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/hikvision.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/honeywell.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/hp-logo.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/huawei_logo.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/Lenovo_logo.png" alt=""/>
                    </div>

                    <div className="clientItem">
                        <img src="/img/partners/snr.png" alt=""/>
                    </div>
                    <div className="clientItem">
                        <img src="/img/partners/yea.png" alt=""/>
                    </div>




                </Slider>
            </div>
        );
    }
}