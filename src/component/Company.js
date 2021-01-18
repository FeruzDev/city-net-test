import React, {Component} from 'react';
import {Button, Col, Container, Row} from "reactstrap";

import {  Link } from "react-router-dom";

class Company extends Component {





    render() {


        return (
            <div className="company">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>

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
                                <Link to="/company">Узнать Больше</Link>
                            </div>
                        </Col>
                        <Col md={6}>



                            <div >
                                <img src="img/office.png" alt=""/>

                            </div>



                        </Col>







                    </Row>
                </Container>
            </div>
        );
    }
}

export default Company;