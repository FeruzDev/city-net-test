import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import AOS from "aos";
import {API_PATH} from "../tools/constants";
import axios from "axios";

class Price extends Component {
    constructor(props, context) {
        super(props, context);
        AOS.init();


        this.state = {
            posts: [],
            post: {}
        }
    }


    componentDidMount() {
        axios.get(API_PATH  + "tariff-item-list/")
            .then(res => {
                this.setState({posts: res.data.results})

            })



        axios.get(API_PATH  + "tariff-header-list/")
            .then(res => {
                this.setState({post: res.data.results})
                console.log(res)
            });


    }

    render() {
        return (


            <div className="price">




                <div className="container">

                    {/*<h1>Безлимитные Тарифные Планы</h1>*/}
                    <h1 className="aboutPrivceTitle">{this.state.post[0] ? this.state.post[0].title : ""}</h1>

                    {
                        this.state.posts.map((item)=>(
                            <div data-aos="fade-up"   data-aos-duration="1500">

                                <div className="row">
                                    <div className="box">
                                        <h3>{item.name}</h3>
                                        <h1>{item.price}</h1>
                                        <h3>Сум</h3>
                                    </div>


                                    <div className="box">
                                        <h4>{item.context_speed_1}</h4>
                                        <h4>{item.context_speed_2}</h4>
                                        <h4>{item.context_speed_3}</h4>
                                    </div>


                                    <div className="box">
                                        <h4> {item.content_1}</h4>
                                        <h4>{item.content_2}</h4>
                                        <h4>{item.content_3}</h4>
                                    </div>
                                    <div className="box">
                                        <Link to='/main-provider/contact'>ЗАКАЗАТЬ</Link>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                    {/*<div data-aos="fade-up"   data-aos-duration="1500">*/}

                    {/*<div className="row">*/}
                    {/*    <div className="box">*/}
                    {/*        <h3>NEXT</h3>*/}
                    {/*        <h1>95 000</h1>*/}
                    {/*        <h3>Сум</h3>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4>Nimadir</h4>*/}
                    {/*        <h4>Скорость</h4>*/}
                    {/*        <h4>6 Мбит/с</h4>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4> 1 Free WebApp</h4>*/}
                    {/*        <h4>1 Free MobileApp</h4>*/}
                    {/*        <h4>1 Free DesktopApp</h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="box">*/}
                    {/*        <Link to='/main-provider/contact'>ЗАКАЗАТЬ</Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*</div>*/}


                    {/*<div data-aos="fade-up"   data-aos-duration="1500">*/}


                    {/*<div className="row">*/}
                    {/*    <div className="box">*/}
                    {/*        <h3>OPTIMUM</h3>*/}
                    {/*        <h1>115 000</h1>*/}
                    {/*        <h3>Сум</h3>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4>Nimadir</h4>*/}
                    {/*        <h4>Скорость</h4>*/}
                    {/*        <h4>10 Мбит/с</h4>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4> 1 Free WebApp</h4>*/}
                    {/*        <h4>1 Free MobileApp</h4>*/}
                    {/*        <h4>1 Free DesktopApp</h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="box">*/}
                    {/*        <Link to='/main-provider/contact'>ЗАКАЗАТЬ</Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*</div>*/}


                    {/*<div data-aos="fade-up"   data-aos-duration="1500">*/}

                    {/*<div className="row">*/}
                    {/*    <div className="box">*/}
                    {/*        <h3>COMFORT</h3>*/}
                    {/*        <h1>145 000</h1>*/}
                    {/*        <h3>Сум</h3>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4>Nimadir</h4>*/}
                    {/*        <h4>Скорость</h4>*/}
                    {/*        <h4>20 Мбит/с</h4>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4> 1 Free WebApp</h4>*/}
                    {/*        <h4>1 Free MobileApp</h4>*/}
                    {/*        <h4>1 Free DesktopApp</h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="box">*/}
                    {/*        <Link to='/main-provider/contact'>ЗАКАЗАТЬ</Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*</div>*/}


                    {/*<div data-aos="fade-up"   data-aos-duration="1500">*/}

                    {/*<div className="row">*/}
                    {/*    <div className="box">*/}
                    {/*        <h3>EXCLUSIVE</h3>*/}
                    {/*        <h1>195 000</h1>*/}
                    {/*        <h3>Сум</h3>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4>Nimadir</h4>*/}
                    {/*        <h4>Скорость</h4>*/}
                    {/*        <h4>30 Мбит/с</h4>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4> 1 Free WebApp</h4>*/}
                    {/*        <h4>1 Free MobileApp</h4>*/}
                    {/*        <h4>1 Free DesktopApp</h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="box">*/}
                    {/*        <Link to='/main-provider/contact'>ЗАКАЗАТЬ</Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*</div>*/}


                    {/*<div data-aos="fade-up"    data-aos-duration="1500">*/}
                    {/*<div className="row">*/}
                    {/*    <div className="box">*/}
                    {/*        <h3>PREMIUM</h3>*/}
                    {/*        <h1>249 000</h1>*/}
                    {/*        <h3>Сум</h3>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4>Nimadir</h4>*/}
                    {/*        <h4>Скорость</h4>*/}
                    {/*        <h4>40 Мбит/с</h4>*/}
                    {/*    </div>*/}


                    {/*    <div className="box">*/}
                    {/*        <h4> 1 Free WebApp</h4>*/}
                    {/*        <h4>1 Free MobileApp</h4>*/}
                    {/*        <h4>1 Free DesktopApp</h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="box">*/}
                    {/*        <Link to='/main-provider/contact'>ЗАКАЗАТЬ</Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*</div>*/}


                </div>



            </div>


        );
    }
}

export default Price;