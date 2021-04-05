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
                <ChooseNavbar/>

                <div className='container '>
                    <div className='ChooseContainerBg'>
                        <div className="chooseContainer"/>
                        <div className="chooseContainer2"/>
                    </div>

                    <div className="row">
                        <Link to='/main-product' className="col-md-6">


                            <h1 data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"  >Tехнические продукты</h1>
                            <p data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1100">Наша компания является официальным дилером представленных торговых марок. Это означает,
                                что вся продукция действительно фирменная, никакого «серого импорта», на все товары
                                распространяется гарантия производителя</p>

                       <div data-aos="flip-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                           <Link
                                 to='/main-product'>
                               <span>Продукты</span>
                               <img src="img/icon/right-arrow.svg" alt=""/>
                           </Link>
                       </div>

                        </Link>


                        <Link to='/main-provider' className="col-md-6">
                            <h1 data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000">Интернет-провайдер</h1>
                            <p data-aos="fade-left"
                               data-aos-easing="linear"
                               data-aos-duration="1100">Высокоскоростной Домашний Интернет по технологии FTTx (высокая пропускная способность
                                оптического канала). Стабильный интернет без прерываний и зависаний.</p>

                            <div data-aos="flip-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000">
                                <  Link
                                    to='/main-provider'>
                                    <span>Провайдер</span>
                                    <img src="img/icon/right-arrow.svg" alt=""/>
                                </Link>
                            </div>



                        </Link>

                    </div>
                    <div className='scrollAnim'/>
                    <div className='scrollAnim2'/>

                </div>


                <div className='bgVideo'>
                    <video src="img\Digital_Net.mp4" loop muted
                           autoPlay>
                    </video>
                </div>


            </div>

        );
    }
}

export default Choose;