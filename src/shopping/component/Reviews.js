import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Slider from "react-slick";
import AOS from 'aos';



class Reviews extends Component {

    constructor(props, context) {
        super(props, context);
        AOS.init();
    }

    render() {





        const settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="reviews">
                <Container fluid={true}>
                    <Row>
                        <Col md={4}>
                            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="reviewsLeft" style={{backgroundColor: "#F7F7F7"}}>
                                <div className="reviewsLeftImg">
                                    <img src="./img/shoppingImg/free-delivery.svg" alt=""/>
                                </div>
                                <div className="reviewsRightCon">
                                    <h1>Free Shipping</h1>
                                    <p>Lorem ipsum dolor sit amet, conse adipisicing elit. Possimus, quam.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="reviewsLeft" style={{backgroundColor: "#E5E5E5"}}>
                                <div className="reviewsLeftImg">
                                    <img src="./img/shoppingImg/gift.svg" alt=""/>
                                </div>
                                <div className="reviewsRightCon">
                                    <h1>Free Shipping</h1>
                                    <p>Lorem ipsum dolor sit amet, conse adipisicing elit. Possimus, quam.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="reviewsLeft" style={{backgroundColor: "#A5CAE5"}}>
                                <div className="reviewsLeftImg">
                                    <img src="./img/shoppingImg/customer-service.svg" alt=""/>
                                </div>
                                <div className="reviewsRightCon">
                                    <h1>Free Shipping</h1>
                                    <p>Lorem ipsum dolor sit amet, conse adipisicing elit. Possimus, quam.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="reviewsLeft" style={{backgroundColor: "#6EB5EA"}}>
                                <div className="reviewsLeftImg">
                                    <img src="./img/shoppingImg/settings.svg" alt=""/>
                                </div>
                                <div className="reviewsRightCon">
                                    <h1>Free Shipping</h1>
                                    <p>Lorem ipsum dolor sit amet, conse adipisicing elit. Possimus, quam.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>

                            <div className="reviewsRightTitle">
                                <h1>Our satisfied customer says</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in</p>
                            </div>




                            <div className="customerCarousel">

                                <Slider {...settings}>
                                    <div className="customerCarouselItem">

                                        <img src="./img/shoppingImg/man.svg" alt=""/>

                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in</p>


                                        <h2>Aoran Smith</h2>

                                    </div>


                                    <div  className="customerCarouselItem">

                                        <img src="./img/shoppingImg/man.svg" alt=""/>

                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in</p>

                                        <h2>Aoran Smith</h2>

                                    </div>


                                    <div  className="customerCarouselItem">

                                        <img src="./img/shoppingImg/man.svg" alt=""/>

                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in</p>

                                        <h2>Aoran Smith</h2>

                                    </div >


                                    <div  className="customerCarouselItem">

                                        <img src="./img/shoppingImg/man.svg" alt=""/>

                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in</p>

                                        <h2>Aoran Smith</h2>

                                    </div>


                                    <div  className="customerCarouselItem">

                                        <img src="./img/shoppingImg/man.svg" alt=""/>

                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in</p>

                                        <h2>Aoran Smith</h2>

                                    </div>


                                    <div  className="customerCarouselItem">

                                        <img src="./img/shoppingImg/man.svg" alt=""/>

                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in</p>

                                        <h2>Aoran Smith</h2>

                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Reviews;