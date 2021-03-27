import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import NavbarShopping from "./NavbarShopping";
import ProductFooter from "./ProductFooter";

class ShoppingContact extends Component {
    render() {
        return (
            <div className="shoppingContact">
                <NavbarShopping></NavbarShopping>
                <div className="aboutBackFon">
                    <h2>Контакты</h2>
                </div>

                <div className="Shc">
                    <Container >
                        {/*<h1> Оставьте заявку</h1>*/}
                        <img src="./img/vectors.png" alt="img.." className="homeCarouselVector"/>
                        <Row>
                            <Col md={6}>

                                <h2>Lorem ipsum dolor sit.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim error inventore libero
                                    qui sint ullam veniam voluptatum. Autem beatae, eveniet harum modi nobis nulla obcaecati
                                    officiis praesentium quas voluptatibus?</p>
                                <img src="./img/shoppingImg/illl.png" alt=""/>
                            </Col>
                            <Col md={6}>
                                <form id="shoppingContact" action="" method="post">

                                    <fieldset>
                                        <input name='FullName'
                                               placeholder='Введите свое полное имя'
                                               required
                                               type='text'
                                               autoComplete="off"/>
                                    </fieldset>
                                    <fieldset>
                                        <input name='number'
                                               placeholder=' Введите номер телефона'
                                               required
                                               type='text'
                                               autoComplete="off"

                                        />
                                    </fieldset>

                                    <fieldset>
                                        <input name='number'
                                               placeholder=' Введите тему'
                                               required
                                               type='text'
                                               autoComplete="off"/>

                                    </fieldset>


                                    <fieldset>
                                          <textarea name='message'
                                                    placeholder='Введите сообщение'
                                                    required
                                                    type='textarea'/>
                                    </fieldset>
                                    <fieldset>
                                        <button name="submit" type="submit"
                                        >ОТПРАВИТЬ
                                        </button>
                                    </fieldset>

                                </form>
                            </Col>

                        </Row>
                    </Container>

                    <iframe className='addressShowRoom'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.44780821176096!2d69.2047007381916!3d41.33969184900727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c0f8d40f95d%3A0x5041ae2fd8353d30!2sDiscover%20Invest!5e0!3m2!1sru!2s!4v1615751003958!5m2!1sru!2s"
                            loading="lazy"></iframe>
                </div>



                <ProductFooter></ProductFooter>
            </div>
        );
    }
}

export default ShoppingContact;