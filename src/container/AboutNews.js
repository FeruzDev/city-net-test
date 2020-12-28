import React, {Component} from 'react';
import {Col, Container, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter} from "reactstrap";

class AboutNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ["img/internet3.jpg"],
            newsTitle: ["Никаких стереотипов"],

            newContent: ["Наша компания разрушает все сложившиеся стереотипы! Все возможные фантазии о высокой скорости воплощаются благодаря стараниям специалистов компании CityNet!"]


        }
    }

    render() {
        return (
            <div className="aboutNews">
                <h1 >Подробности новости</h1>
                <Container fluid={true}>

                    <Row>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md={{size: '5'}}>
                            <Card>
                                <CardImg top  src="img/internet3.jpg" alt="News image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{this.state.newsTitle}</CardTitle>
                                    <CardText>{this.state.newContent}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutNews;