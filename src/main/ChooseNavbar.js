

import React, { useState } from 'react';
import "../component/main.scss";
import {Animated} from "react-animated-css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import {SITE_LANG} from "../tools/constants";
import {getText} from "../locales";

const ChooseNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const changeLang = (lang) => {
        localStorage.setItem(SITE_LANG, lang);
        window.location.reload();

    };

    return (
        <div className="chooseNavbar">


            <div className="container-d">


                <Navbar     expand="md">
                    <Link className="navbar-brand" to="/">

                        <img src="/img/clogo.png" alt=""/>
                    </Link>
                    <NavbarToggler onClick={toggle} >
                        <img src="/img/icon/list.svg" alt=""/>
                    </NavbarToggler>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav   navbar>


                            <div>
                                <NavItem>
                                    <Link to="/main-product" >{getText("products")}</Link>

                                </NavItem>



                                <NavItem>
                                    <Link to="/main-provider">{getText("internet")}</Link>

                                </NavItem>
                            </div>

                            <div>
                                <NavItem>
                                    <span className="conTitle"><a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976" target="-_blank">info@citynet.uz</a></span>


                                </NavItem>


                                <NavItem>


                                    <span className="conTitle" ><a href="tel:+998712021111"  target="_blank">+998 71 202 11 11</a></span>

                                </NavItem>


                                <NavItem>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                            <span style={{"text-transform": "uppercase "}}>{ localStorage.getItem(SITE_LANG) || 'RU'}</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item  > <span onClick={() => changeLang('uz')}  >UZ</span></Dropdown.Item>
                                            <Dropdown.Item  > <span onClick={() => changeLang('en')} >EN</span></Dropdown.Item>
                                            <Dropdown.Item  > <span onClick={() => changeLang('ru')}>RU</span></Dropdown.Item>



                                        </Dropdown.Menu>
                                    </Dropdown>

                                </NavItem>


                            </div>

                        </Nav>

                    </Collapse>
                </Navbar>





            </div>








        </div>
    );
}

export default ChooseNavbar;