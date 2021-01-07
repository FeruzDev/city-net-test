import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap/dist/reactstrap.es";

class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div  className="Contact">
                <div className="aboutBackFon">
                    <h2>Связаться с нами</h2>
                </div>
                <img className="backCon" src="img\backCon.svg" alt=""/>

                      <Container fluid={true}>
                          <Row>
                              <Col md={7}>


                                  <h3>Связаться</h3>
                                  <form id="contact" action="" method="post">

                                      <fieldset>
                                          <input    name='FullName'
                                                    placeholder='Введите свое полное имя'
                                                    required
                                                    type='text'
                                                    autoComplete="off"/>
                                      </fieldset>
                                      <fieldset>
                                          <input  name='number'
                                                  placeholder=' Введите номер телефона'
                                                  required
                                                  type='text'
                                                  autoComplete="off"

                                          />
                                      </fieldset>

                                      <fieldset>
                                          <input  name='number'
                                                  placeholder=' Введите тему'
                                                  required
                                                  type='text'
                                                  autoComplete="off"/>

                                      </fieldset>


                                      <fieldset>
                                          <textarea    name='message'
                                                       placeholder='Введите сообщение'
                                                       required
                                                       type='textarea' />
                                      </fieldset>
                                      <fieldset>
                                          <button name="submit" type="submit"
                                                 >ОТПРАВИТЬ
                                          </button>
                                      </fieldset>

                                  </form>



                              </Col>
                              <Col md={5}>
                                  <div className="footer-center">

                                      <div>

                                          <a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976"
                                             className="footerIcon">
                                              <img src="img/icon/geo.svg" alt=""/>
                                          </a>
                                          <p><span><a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976">Ташкент, Чилонзор</a></span> Улица Сеула, дом 14</p>
                                      </div>

                                      <div>
                              <span className="footerIcon">
                            <img src="img/icon/telephone (1).svg" alt=""/>
                            </span>
                                          <p><span><a href="tel:+998712021111"  target="_blank">+998 71 202 1111 </a></span>Колл-центр 24/7</p>


                                      </div>

                                      <div>
                             <span className="footerIcon">
                            <img src="img/icon/info (1).svg" alt=""/>
                            </span>
                                          <p><span> <a href="mailto:info@citynet.uz" target="-_blank">info@citynet.uz</a></span>Отправьте нам свой запрос в <br/> любое время!</p>
                                      </div>

                                  </div>

                              </Col>
                          </Row>
                      </Container>
            </div>
        );
    }
}

export default Contact;