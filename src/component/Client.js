import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {API_PATH_MAIN} from "../tools/constants";

export default class Client extends Component {

    constructor() {
        super();
        this.state ={
            posts: []
        }
    }

    componentDidMount() {
        axios.get(API_PATH_MAIN + "clients-img-list/")
            .then(res =>{
                this.setState({posts: res.data.results})
                console.log(res)
            })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            speed: 2000,
            autoplaySpeed: 0,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        dots: false
                    }
                }
                ]
        };
        return (
            <div className="container-fluid">
                <div className="clients">
                    <h2>Наши Лучшие Клиенты</h2>
                    <Slider {...settings}>



                        {
                            this.state.posts.map((item) =>(
                                <a  target="_blank"  href={item.link} className="clientItem">
                                    <img className="clientsImg" src={item.img} alt=""/>
                                </a>
                            ))
                        }



                    </Slider>
                </div>
            </div>
        );
    }
}