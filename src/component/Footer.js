import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Link,
} from "react-router-dom";




class Footer extends Component {
    render() {
        return (
            <div className="footer">
              {/*<BrowserRouter>*/}
                  <footer className="footer-distributed">

                      <div className="footer-left">

                          <img src="img/clogo.png" alt=""/>

                          <p className="footer-links">

                              <Link to='/company'   >О Компании</Link>

                              <Link to='/tariff' href="#">Интернет</Link>

                              <Link to='/news'>Новости</Link>

                              <Link to='/ads' >Oбъявление</Link>

                              <Link to='/contact'  >Контакты</Link>

                              <a href="./files/oferta.pdf" target="_blank" >Публичная Оферта</a>

                              <Link to="/docs">Документы</Link>

                          </p>


                      </div>

                      <div className="footer-center">

                          <div>

                              <a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976"
                                 className="footerIcon">
                                  <img src="img/icon/geo.svg" alt=""/>
                              </a>
                              <p><span> <a  href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976" target="_blank"> </a>Ташкент, Чилонзор</span> Улица Сеула, дом 14</p>
                          </div>

                          <div>
                              <span className="footerIcon">
                            <img src="img/icon/telephone (1).svg" alt=""/>
                            </span>
                              <p><span><a href="tel:+998712021111"  target="_blank">+998 71 202 1111</a> </span>Колл-центр 24/7</p>


                          </div>

                          <div>
                               <span className="footerIcon">
                            <img src="img/icon/info (1).svg" alt=""/>
                            </span>
                              <p><span><a href="mailto:info@citynet.uz" target="-_blank">info@citynet.uz</a></span>Отправьте нам свой запрос в <br/> любое время!</p>
                          </div>

                      </div>

                      <div className="footer-right">

                          <p className="footer-company-about">
                              <span>Давайте станем социальными</span>
                              Мы будем рады ответить на вопросы и предложить оптимальные решения для Ваших задач.
                              Отправьте нам заявку, и наши сотрудники обязательно свяжутся с Вами.
                          </p>

                          <div className="sotSet">

                              <a href="https://www.facebook.com/CITYNET.uz/"><img src="img/icon/facebook (1).svg" alt=""/></a>
                              <a href="https://www.instagram.com/citynet.uz/"><img src="img/icon/instagram (1).svg" alt=""/></a>
                              <a href="mailto:citynet@info.uz"><img src="img/icon/message.svg" alt=""/></a>
                              <a href="https://t.me/citynetpro"><img src="img/icon/telegram (1).svg" alt=""/></a>
                              <a href="https://www.youtube.com/channel/UC80AZCvgAcW-_IEBCesRNBg?view_as=subscriber"><img src="img/icon/youtube (3).svg" alt=""/></a>


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