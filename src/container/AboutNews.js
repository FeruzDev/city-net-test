import React, {Component} from 'react';
import {Col, Container, Row, Card } from "reactstrap";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import {Link} from "react-router-dom";
class AboutNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ["/img/internet3.jpg"],
            newsTitle: ["Никаких стереотипов"],

            newContent: ["Наша компания разрушает все сложившиеся стереотипы! Все возможные фантазии о высокой скорости воплощаются благодаря стараниям специалистов компании CityNet!"]


        }
    }



    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
        <div>
            <Navbar></Navbar>
            <div className="aboutNews">
                <div className="aboutBackFon">
                    <h2>Новости</h2>
                </div>

                <Container >
                    <Row>
                        <Col md={8}>
                            <Link className="card">
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <span className="date">
                                          <span className="day">7</span>
                                          <span className="month">Jan</span>
                                      </span>
                                </div>


                                <a className="newsTitleLink">Lorem ipsum dolor sit.</a>
                                <p className="newsTitleP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis
                                    fugiat nulla repellendus velit vero? <Link> more..</Link></p>
                                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>12</span>viewing</a>

                            </Link>
                            <Link className="card">
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <span className="date">
                                          <span className="day">7</span>
                                          <span className="month">Jan</span>
                                      </span>
                                </div>
                                <a className="newsTitleLink">Lorem ipsum dolor sit.</a>
                                <p className="newsTitleP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis
                                    fugiat nulla repellendus velit vero? <Link> more..</Link></p>
                                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>12</span>viewing</a>

                            </Link>
                            <Link className="card">
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <span className="date">
                                          <span className="day">7</span>
                                          <span className="month">Jan</span>
                                      </span>
                                </div>
                                <a className="newsTitleLink">Lorem ipsum dolor sit.</a>
                                <p className="newsTitleP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis
                                    fugiat nulla repellendus velit vero? <Link> more..</Link></p>
                                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>12</span>viewing</a>

                            </Link>
                            <Link className="card">
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <span className="date">
                                          <span className="day">7</span>
                                          <span className="month">Jan</span>
                                      </span>
                                </div>
                                <a className="newsTitleLink">Lorem ipsum dolor sit.</a>
                                <p className="newsTitleP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis
                                    fugiat nulla repellendus velit vero? <Link> more..</Link></p>
                                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>12</span>viewing</a>

                            </Link>
                            <Link className="card">
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <span className="date">
                                          <span className="day">7</span>
                                          <span className="month">Jan</span>
                                      </span>
                                </div>
                                <a className="newsTitleLink">Lorem ipsum dolor sit.</a>
                                <p className="newsTitleP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis
                                    fugiat nulla repellendus velit vero? <Link> more..</Link></p>
                                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>12</span>viewing</a>

                            </Link>
                        </Col>
                        <Col md={4}>
                            <div className="inputGroupM">
                                <div className="inputGroup">
                                    <input type="text"  placeholder="Поиск..." />
                                </div>
                                <button className="searchBtn">ПОИСК</button>
                            </div>
                            <div className="category">
                                <h2>Категория</h2>
                                <div>
                                    <a href="#!">
                                        Интернет <span>(12)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#!">
                                        IP TV <span>(22)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#!">
                                        IP телефония <span>(12)</span>
                                    </a>
                                </div>
                            </div>
                            <div className="recentPost">
                                <h2>Недавний пост</h2>
                                <div>
                                    <img src="/img/ipt2.jpeg" alt="News image cap"/>
                                    <p className='text-self-center'>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/iptv2.jpg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/int.jpg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
            <Footer></Footer>
        </div>
        );
    }
}

export default AboutNews;