import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Ads extends Component {
    render() {
        return (
            <div className="ads">
                <Container fluid={true}>
                    <h1>Oбъявление</h1>
                    {/*<div className="backBlueFon"></div>*/}
                    <Row>
                        <Col md={4}>

                            <div className="adsImg">
                                <img src="img/ipt.jpg" alt=""/>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="adsTitle">
                                <h2>Lorem ipsum dolor sit.</h2>
                                <span>21.12.2020</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam
                                    asperiores autem commodi culpa cupiditate eaque maiores maxime molestias nobis
                                    quidem quo quos ratione similique veritatis, voluptatem voluptates. Aliquam amet
                                    aspern di delectus dignissimos distinctio esse est
                                    facere illo ipsa laborum laudantium molestias nam natus odit quam quas qui, quos
                                    reprehenderit sit soluta sunt tempora, temporibus voluptatibus? A, eaque facilis,
                                    fugiat, fugit ipsa iusto laborum laudantium numquam optio rem tenetur ut? Amet
                                    impedit ipsa laudantium, minima nihil non reiciendis! Consequatur, sunt!</p>

                                <a href="#!" className="hvr-pop">ЧИТАТЬ ДАЛЕЕ »</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Ads;