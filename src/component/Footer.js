import React, {Component} from 'react';
import {
    Link,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {Container} from "reactstrap";


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/*<BrowserRouter>*/}

                <footer className="footer-distributed">

                    <div className="footer-left">

                        <Link to="/main-provider">
                            <img src="/img/clogo.png" alt=""/>
                        </Link>

                        <p className="footer-links">

                            <Link to='/main-provider/company'>О Компании</Link>

                            <Link to='/main-provider/tariff' href="#">Интернет</Link>

                            <Link to='/main-provider/news'>Новости</Link>

                            <Link to='/main-provider/ads'>Oбъявление</Link>

                            <Link to='/main-provider/contact'>Контакты</Link>

                            <a href="/files/oferta.pdf" target="_blank">Публичная Оферта</a>

                            <Link to="/main-provider/docs">Документы</Link>

                        </p>


                    </div>

                    <div className="footer-center">

                        <div>

                            <a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976"
                               className="footerIcon">
                                <img src="/img/icon/geo.svg" alt=""/>
                            </a>
                              <a
                                href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976"
                                target="_blank"><p>Ташкент, Чилонзор <br/> Улица Сеула, дом 14</p>  </a>
                        </div>

                        <div>
                              <span className="footerIcon">
                            <img src="/img/icon/telephone (1).svg" alt=""/>
                            </span>
                            <p><span><a href="tel:+998712021111" target="_blank">+998 71 202 1111</a> </span>Колл-центр
                                24/7</p>


                        </div>

                        <div>
                               <span className="footerIcon">
                            <img src="/img/icon/info (1).svg" alt=""/>
                            </span>
                            <p><span><a href="mailto:info@citynet.uz" target="-_blank">info@citynet.uz</a></span>Отправьте
                                нам свой запрос в <br/> любое время!</p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>Давайте станем социальными</span>
                            Мы будем рады ответить на вопросы и предложить оптимальные решения для Ваших задач.
                            Отправьте нам заявку, и наши сотрудники обязательно свяжутся с Вами.
                        </p>

                        <div className="sotSet">

                            <a href="https://www.facebook.com/CITYNET.uz/"><img src="/img/icon/facebook (1).svg" alt=""/></a>
                            <a href="https://www.instagram.com/citynet.uz/"><img src="/img/icon/instagram (1).svg"
                                                                                 alt=""/></a>
                            <a href="mailto:citynet@info.uz"><img src="/img/icon/message.svg" alt=""/></a>
                            <a href="https://t.me/citynetpro"><img src="/img/icon/telegram (1).svg" alt=""/></a>
                            <a href="https://www.youtube.com/channel/UC80AZCvgAcW-_IEBCesRNBg?view_as=subscriber"><img
                                src="/img/icon/youtube (3).svg" alt=""/></a>


                        </div>

                    </div>

                    <p className="footerTitle">©2018 - {new Date().getFullYear()} "OOO Citynet". Все права защищены.</p>

                </footer>
                {/*</BrowserRouter>*/}
            </div>
        );
    }
}

export default Footer;