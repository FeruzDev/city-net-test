import React, {Component} from 'react';
import {Button, Col, Container, Row} from "reactstrap";

import {  Link } from "react-router-dom";

class Company extends Component {





    render() {


        return (
            <div className="company">
                <Container>
                    <main>
                        <h1>Дополнительные услуги компании CityNet</h1>
                        <p>Компания "CityNet" предлагает полный спектр услуг от проектирования до внедрения, а так же
                            разработает индивидуальные решения для вашего проекта с учетом его специфики.</p>
                        <p>Компанией разработана система технической поддержки клиентов в режиме 24/7.</p>
                    </main>
                </Container>
                <Container fluid={true} >
                    <Row>
                        <Col md={4}>

                            <div className="companyTitle">
                                {/*<h6>Подробнее о нашей компании</h6>*/}
                                <h1>О Компании</h1>
                                <p>"CityNet" - это инновационно-технологическая компания, которая предлагает широкий
                                    ассортимент товаров и услуг, таких как:</p>
                                <ul>
                                    <li>Осуществление технической поддержки клиентов</li>
                                    <li>Партнеры в Узбекистане, странах СНГ, КНР и ЕС;</li>
                                    <li>Прогрессивные решения в области ИТ</li>
                                    <li>Проверенные и доказанные нашим опытом стандарты</li>
                                    <li>Один из лидеров в области информационных технол</li>
                                </ul>

                            </div>
                        </Col>
                        <Col md={8}>



                            <div >
                                <img src="/img/112w.png" alt=""/>


                            </div>



                        </Col>







                    </Row>
                </Container>
            </div>
        );
    }
}

export default Company;