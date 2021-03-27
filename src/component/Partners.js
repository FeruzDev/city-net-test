import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH_MAIN} from "../tools/constants";

export default class Partners extends Component {
    constructor() {
        super();
        this.state ={
            posts: []
        }
    }

    componentDidMount() {
        axios.get(API_PATH_MAIN + "partner-img-list/")
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
            speed: 2000,
            autoplaySpeed: 0,
            cssEase: "linear"
        };
        return (
           <div className="container-fluid">
               <div className="clients">
                   <h2>Наши Лучшие Партнеры</h2>
                   <Slider {...settings}>



                       {
                           this.state.posts.map((item) =>(
                               <a href={item.link} className="clientItem">
                                   <img src={item.img} alt=""/>
                               </a>
                           ))
                       }


                   </Slider>
               </div>
           </div>
        );
    }
}