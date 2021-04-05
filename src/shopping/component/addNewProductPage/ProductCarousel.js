import React, {Component} from "react";
import Slider from "react-slick";
import '../../../component/main.scss'
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../../tools/constants";

class ProductCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],


        }
    }

    componentDidMount() {
        axios.get(API_PATH_SELLOFFICE + "product-list")
            .then(res =>{

                this.setState({posts: res.data.results})

            })
            .catch(error => {
                // console.log('error')
            })



    }


    render() {
        const settings = {

            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            pauseOnHover: true,
            speed: 10000,
            autoplaySpeed: 0,
            cssEase: "linear",
            dots: true,

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };



        return (
            <div className="productCarousel">


                <div className="container">
                    <div className="col-md-6">
                        <h1 className=''>OUR PROJECTS</h1>
                        <p className='mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
                            ducimus eaque illum incidunt
                            iusto perspiciatis quod rerum tempore. Asperiores corporis eligendi facilis non pariatur
                            quibusdam quisquam repellendus soluta ullam voluptatum.</p>
                    </div>
                </div>


                <Slider {...settings}>



                    {
                        this.state.posts.map((item )=>(
                            <div className='carouselBox '>


                                <div className="carTitle">

                                    <p dangerouslySetInnerHTML={{ __html: item.title }} className="p-2" />
                                </div>
                                <img className='w-100' src={item.img1} alt=""/>
                            </div>
                        ))
                    }


                </Slider>
            </div>
        );
    }
}


export default ProductCarousel