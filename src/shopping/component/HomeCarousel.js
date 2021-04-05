import React, {Component} from 'react';
import Slider from "react-slick";
import axios from "axios";
import {API_PATH_MAIN, API_PATH_SELLOFFICE} from "../../tools/constants";
class HomeCarousel extends Component {

    constructor() {
        super();
        this.state = {
            post: {},
            posts : []
        }
    }





    componentDidMount() {


        axios.get(API_PATH_SELLOFFICE + "banner-content-list/")
            .then(res => {
                this.setState({post: res.data.results})
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })



        axios.get(API_PATH_SELLOFFICE + "banner-img-list/")
            .then(res => {
                this.setState({posts: res.data.results})
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })


    }


    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,

            fade: true,
        };
        return (
            <div className="homeCarousel">

                <img src="./img/vectors.png" alt="img.." className="homeCarouselVector"/>
                <img src="./img/vectors.png" alt="img.." className="homeCarouselVector2"/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="leftTitle ">
                                <h2 className="typing"> {this.state.post[0] ? this.state.post[0].title : ""}</h2>
                                <p  data-aos="fade-right"   data-aos-duration="1500">{this.state.post[0] ? this.state.post[0].content : ""}</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <Slider {...settings}>




                                {
                                    this.state.posts.map((item) =>(
                                        <div className="carouselItems">
                                            <div className="rightImg ">

                                                <img src={item.img}
                                                     className="animate__animated animate__pulse animate__infinite  animate__slower"
                                                     alt=""/>

                                            </div>


                                        </div>
                                    ))
                                }







                            </Slider>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default HomeCarousel;