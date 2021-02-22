import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,

                position: "absolute",
                height: "100%",

                bottom: "0",

                fontSize: "3vw !important" ,
                right: "0",
                zIndex: "999",
                display: "flex",
                alignItems: "center",
                width: "4vw",
                justifyContent: "center",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,



                position: "absolute",
                height: "100%",

                bottom: "0",

                fontSize: "3vw",
                left: "0",
                zIndex: "999",
                display: "flex",
                alignItems: "center",
                width: "4vw",
                justifyContent: "center"

            }}
            onClick={onClick}
        />
    );
}

export default class ProductSlide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="productSlide">
                <Slider {...settings}>
                    <div>
                        <img src="\img\shoppingImg\Product\hik (1).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (2).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (3).png" alt=""/>
                    </div>
                    <div>
                        <img src="\img\shoppingImg\Product\hik (4).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (5).png" alt=""/>
                    </div>


                    <div>
                        <img src="\img\shoppingImg\Product\hik (6).png" alt=""/>
                    </div>


                    <div>
                        <img src="\img\shoppingImg\Product\hik (8).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (9).png" alt=""/>
                    </div>
                    <div>
                        <img src="\img\shoppingImg\Product\hik (10).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (11).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (12).png" alt=""/>
                    </div>

                    <div>
                        <img src="\img\shoppingImg\Product\hik (7).png" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}