import React, {Component} from 'react';
import {Button, Col, Container, Row} from "reactstrap";


import {Link} from "react-router-dom";

class Company extends Component {


    render() {


        return (
            <div className="company">
                <Container>
                    <div data-aos="flip-up"  >

                        <main>

                            <h1>Дополнительные услуги компании CityNet</h1>
                            <p>Компания "CityNet" предлагает полный спектр услуг от проектирования до внедрения, а так же
                                разработает индивидуальные решения для вашего проекта с учетом его специфики.</p>
                            <p>Компанией разработана система технической поддержки клиентов в режиме 24/7.</p>
                        </main>
                    </div>
                </Container>
                <Container fluid={true}>
                    <Row>
                        <Col md={4}>

                            <div className="companyTitle" >
                                {/*<h6>Подробнее о нашей компании</h6>*/}
                                <h1  data-aos="fade-right" data-aos-easing="linear"
                                     data-aos-duration="800">О Компании</h1>
                                    <p  data-aos="fade-right" data-aos-easing="linear"
                                        data-aos-duration="900">"«CityNet IT Engineering» — это инновационно-технологическая компания, которая
                                        предлагает широкий ассортимент товаров и услуг. За период своей деятельности
                                        компания реализовала более 1 000 проектов.</p>
                                <p data-aos="fade-right" data-aos-easing="linear"
                                   data-aos-duration="1000">
                                    Мы предлагаем полный спектр услуг от проектирования до внедрения, а также
                                    разработаем индивидуальные решения для вашего проекта с учетом его специфики.
                                </p>


                                <h3 data-aos="fade-right" data-aos-easing="linear"
                                    data-aos-duration="1100">Приоритетные направления</h3>

                                <ul>
                                    {/*<li>Осуществление технической поддержки клиентов</li>*/}
                                    {/*<li>Партнеры в Узбекистане, странах СНГ, КНР и ЕС;</li>*/}
                                    {/*<li>Прогрессивные решения в области ИТ</li>*/}
                                    {/*<li>Проверенные и доказанные нашим опытом стандарты</li>*/}
                                    {/*<li>Один из лидеров в области информационных технол</li>*/}

                                    <li  data-aos="fade-right" data-aos-easing="linear"
                                         data-aos-duration="1150">Скорост</li>
                                    <li  data-aos="fade-right" data-aos-easing="linear"
                                         data-aos-duration="1150">Безопастность</li>
                                    <li  data-aos="fade-right" data-aos-easing="linear"
                                         data-aos-duration="1150">Интеллектуальность</li>


                                    {/*<li>Предоставление услуг интернета</li>*/}
                                    {/*<li>Интеллектуальное видеонаблюдение</li>*/}
                                    {/*<li>Охранно-пожарная сигнализация</li>*/}
                                    {/*<li>Система пожаротушения</li>*/}
                                    {/*<li>Системы контроля и управления доступом</li>*/}
                                    {/*<li>Парковочная система</li>*/}
                                    {/*<li>IP и аналоговая телефония</li>*/}
                                    {/*<li>Огнезащитная обработка конструкций</li>*/}
                                    {/*<li>Звуковое оповещение и управление эвакуаций</li>*/}
                                    {/*<li>Поставка специализированного оборудования для слаботочных систем</li>*/}
                                    {/*<li>Центр обработки вызовов</li>*/}
                                    {/*<li>Автоматизация инженерных систем</li>*/}
                                    {/*<li>Структурирование кабельных сетей (ЛВС, ВОЛС, телефония)</li>*/}
                                    {/*<li>Системы конференц связи</li>*/}
                                    {/*<li>Проектирование слаботочных систем</li>*/}
                                </ul>

                            </div>
                        </Col>
                        <Col md={8}>


                            <div>
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