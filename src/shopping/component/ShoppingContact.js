import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class ShoppingContact extends Component {
    render() {
        return (
            <div className="shoppingContact">


                <Container fluid={true}>
                    <h1>Leave an application</h1>
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

            </div>
        );
    }
}

export default ShoppingContact;