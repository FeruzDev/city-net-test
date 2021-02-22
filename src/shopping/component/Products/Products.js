import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import {  Link } from "react-router-dom";
import ProductSlide from "./ProductSlide";
import NavbarShopping from "../NavbarShopping";
import '../../../component/main.css'
    import Navbar from "../../../component/Navbar";
import ProductFooter from "../ProductFooter";
class Products extends Component {







    componentDidMount() {
        window.scrollTo(0, 0);
    }






    render() {
        return (

            <div>
                <NavbarShopping></NavbarShopping>
                <div className="Products">
                    {/*<NavbarShopping></NavbarShopping>*/}

                    <ProductSlide></ProductSlide>
                    <Container fluid={true}>
                        <h2>Продукты</h2>
                        <Row>

                            <Col md={3}>
                                <div className="productsList">
                                    <ul>
                                        <li><Link>Сетевые видеокамеры</Link></li>
                                        <li><Link>Аналоговые камеры</Link></li>
                                        <li><Link>Сетевые видеорегистраторы</Link></li>
                                        <li><Link>Цифровые видеорегистраторы</Link></li>
                                        <li><Link>Тепловизионное оборудование</Link></li>
                                        <li><Link>Видеостены и мониторы</Link></li>
                                        <li><Link>Домофония</Link></li>
                                        <li><Link>Сетевое оборудование</Link></li>
                                        <li><Link>Кабели</Link></li>
                                        <li><Link>СКУД</Link></li>
                                        <li><Link>Охранные системы</Link></li>
                                        <li><Link>Аксессуары</Link></li>
                                        <li><Link>VMS</Link></li>
                                        <li><Link>Специализированные решения</Link></li>
                                        <li><Link>Носители информации</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={9}>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-01.jpg" alt=""/>
                                    <span>
                                    Сетевые видеокамеры
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-16.jpg" alt=""/>
                                    <span>
                                    Аналоговые камеры
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-12.jpg" alt=""/>
                                    <span>
                                   Сетевые видеорегистраторы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-04.jpg" alt=""/>
                                    <span>
                                  Цифровые видеорегистраторы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\thermal.png" alt=""/>
                                    <span>
                                   Тепловизионное оборудование
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-15.jpg" alt=""/>
                                    <span>
                                    Видеостены и мониторы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-09.jpg" alt=""/>
                                    <span>
                                   Домофония
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-13.jpg" alt=""/>
                                    <span>
                                   Сетевое оборудование
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-85.jpg" alt=""/>
                                    <span>
                                   Кабели
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-86.jpg" alt=""/>
                                    <span>
                                   СКУД
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\guard.png" alt=""/>
                                    <span>
                                    Охранные системы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-10.jpg" alt=""/>
                                    <span>
                                   Аксессуары
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-17.jpg" alt=""/>
                                    <span>
                                   VMS
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\special.png" alt=""/>
                                    <span>
                                   Специализированные решения
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\storage.png" alt=""/>
                                    <span>
                                   Носители информации
                                </span>
                                </div>



                            </Col>
                        </Row>
                    </Container>

                </div>
                <ProductFooter></ProductFooter>
            </div>
        );
    }
}

export default Products;