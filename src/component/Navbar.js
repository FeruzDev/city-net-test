import React, { useState } from 'react';
import "./main.scss";
import {Animated} from "react-animated-css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import {  Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
const NavbarMain = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="mainNavbar">




                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay="0" animationInDuration="2000">

                        <img src="./img/clogo.png" alt=""/>
                        </Animated>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} >
                        <img src="img/icon/list.svg" alt=""/>
                    </NavbarToggler>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto " navbar>

                            <NavItem>
                                <Link to="/company" >О Компании</Link>

                            </NavItem>
                            <NavItem>
                                <Link to="/tariff">Интернет</Link>

                            </NavItem>
                            <NavItem>
                                <Link to="/news">Новости</Link>

                            </NavItem>
                            <NavItem>
                                <Link to="/ads"  >Oбъявление</Link>

                            </NavItem>
                            <NavItem>
                                <Link to="/contact">Контакты</Link>

                            </NavItem>


                            <div className="con">
                                <NavItem>

                                    <span className="conTitle"><a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976" target="-_blank">info@citynet.uz</a></span>

                                    <span className="conTitle" style={{marginTop :" 1vw"}}><a href="tel:+998712021111"  target="_blank">+998 71 202 11 11</a></span>

                                </NavItem>

                                <NavItem>
                                        <Link><span ><img src="./img/account.svg" alt=""/></span> <span className="cabinet">Кабинет</span></Link>

                                </NavItem>

                                <NavItem className="language">
                                    <Link ><span>UZ</span></Link>
                                    <Link ><span   className='activeLang'>RU</span></Link>
                                </NavItem>
                                
                            </div>
                        </Nav>

                    </Collapse>
                </Navbar>













        </div>
    );
}

export default NavbarMain;