import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import AboutCompany from "../container/AboutCompany";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import ChooseNavbar from "./ChooseNavbar";
import Footer from "../component/Footer";
import Company from "../component/Company";
import Partners from "../component/Partners";


class Choose extends Component {

    render() {

        return (

            <div className='choose'>
                <ChooseNavbar></ChooseNavbar>

                <div className='container '>
                    <div className='ChooseContainerBg'>
                        <div className="chooseContainer"></div>
                        <div className="chooseContainer2"></div>
                    </div>

                    <div className="row">
                        <Link to='/main-product' className="col-md-6">


                            <h1>Lorem ipsum dolor.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores cupiditate,
                                dolorum eligendi facilis harum iste minus modi necessitatibus, nobis obcaecati placeat
                                quam
                                recusandae rem tempore velit voluptas voluptatibus?</p>

                            <Link to='/main-product'>
                                <span>Shopping</span>
                                <img src="img/icon/right-arrow.svg" alt=""/>
                            </Link>

                        </Link>


                        <Link to='/main-provider' className="col-md-6">
                            <h1>Lorem ipsum dolor.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores cupiditate,
                                dolorum eligendi facilis harum iste minus modi necessitatibus, nobis obcaecati placeat
                                quam
                                recusandae rem tempore velit voluptas voluptatibus?</p>
                            < Link to='/main-provider'>
                                <span>Provider</span>
                                <img src="img/icon/right-arrow.svg" alt=""/>
                            </Link>
                        </Link>

                    </div>
                    <div className='scrollAnim' ></div>
                    <div className='scrollAnim2' ></div>

                </div>


                <div className='bgVideo'>
                    <video src="img\Digital_Net.webm" loop muted
                           autoPlay>
                    </video>
                </div>


            </div>

        );
    }
}

export default Choose;