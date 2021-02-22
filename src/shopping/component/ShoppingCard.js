import React, {Component} from 'react';
import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import AOS from 'aos'
class ShoppingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data : [
                {
                    camImg: "./img/shoppingImg/03c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/01c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/02c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/0.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/03c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/01c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/02c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/0.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/03c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/01c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/02c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/0.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/03c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/01c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/02c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/0.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                },
                {
                    camImg: "./img/shoppingImg/05c.png",
                    title: "Lorem ipsum dolor sit amet",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illo nobis perferendis impedit labore quo rerum."
                }



    ],
            numberOfitemsShown: 8


    }
        this.loadMore = this.loadMore.bind(this);


        AOS.init();
    }


    loadMore() {
        this.setState({
         numberOfitemsShown:  this.state.numberOfitemsShown + 4
        });
    }




    render() {


        return (
            <div className="shoppingCard">
                <h1 className="shoppingCardTitle">
                    Best-sellers from top-tier suppliers
                </h1>
                <Row>


                    {
                        this.state.Data.slice(0, this.state.numberOfitemsShown).map((item, index) =>(

                          <Col md={3} data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500">
                              <Card >
                                  <CardTitle><img src={item.camImg} alt=""/></CardTitle>
                                  <CardBody>

                                      <h3>{item.title}</h3>
                                      <p>{item.subTitle}</p>
                                  </CardBody>


                              </Card>
                          </Col>
                        ))
                    }


                </Row>
                <button className="shoppingCardMore" onClick={this.loadMore}>More</button>
            </div>
        );
    }
}

export default ShoppingCard;