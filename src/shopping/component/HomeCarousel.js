import React, {Component} from 'react';
import Slider from "react-slick";
import {Animated} from "react-animated-css";
import App from "../../component/App";
// import 'animate.compat.css';
// import 'animate.min.css';
class HomeCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,

            fade: true,
        };
        return (
            <div className="homeCarousel">

                <Slider {...settings}>
                    <div className="carouselItems">
                        <img src="./img/vectors.png" alt="img.." className="homeCarouselVector"/>
                      <div className="leftTitle">

                          <h3>Lorem ipsum dolor.</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor dolores nam natus non
                              numquam praesentium recusandae saepe totam vitae.</p>
                          <a href="#!">Lorem</a>
                          <img src="./img/vectors.png" alt="img.." className="homeCarouselVector2"/>

                      </div>
                        <div className="rightImg ">



                                <img src="./img/shoppingImg/camera2.png" className="animate__animated animate__pulse animate__infinite  animate__slower" alt=""/>

                        </div>


                    </div>


                    <div className="carouselItems">
                        <img src="./img/vectors.png" alt="img.." className="homeCarouselVector"/>
                        <div className="leftTitle">
                            <h3>Transformer ipsum dolor.</h3>
                            <p>Bonsectetur adipisicing elit. Commodi dolor sit amet, consectetur adipisicing elit. Commodi dolor dolores nam natus non
                                numquam praesentium recusandae saepe totam vitae.</p>
                            <a href="#!">Lorem</a>
                            <img src="./img/vectors.png" alt="img.." className="homeCarouselVector2"/>
                        </div>
                        <div className="rightImg ">

                            <img src="./img/shoppingImg/camera1.png  "  className="animate__animated animate__pulse animate__infinite  animate__slower "   alt=""/>
                        </div>
                    </div>



                    <div className="carouselItems ">
                        <img src="./img/vectors.png" alt="img.." className="homeCarouselVector"/>
                        <div className="leftTitle">
                            <h3>Iipsum Lorem  dolor.</h3>
                            <p>Saepe totam vitae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor dolores nam natus non
                                numquam praesentium recusandae saepe totam vitae.</p>
                            <a href="#!">Lorem</a>
                            <img src="./img/vectors.png" alt="img.." className="homeCarouselVector2"/>

                        </div>
                        <div className="rightImg ">

                            <img src="./img/shoppingImg/0.png"  className="animate__animated animate__pulse animate__infinite animate__slower"  alt=""/>
                        </div>
                    </div>

                </Slider>







            </div>
        );
    }
}

export default HomeCarousel;