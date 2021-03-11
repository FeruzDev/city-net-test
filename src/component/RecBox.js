import React, {Component} from 'react';
import {Link} from "react-router-dom";

class RecBox extends Component {
    render() {
        return (
            <div className="RecCard">


                <div className="container ">


                    <h1>Воспользуйтесь Нашими Услугами</h1>

                    <img className="backFon1" src="img/backFon.svg" alt=""/>

                    <img className="backFon2" src="img/backFon.svg" alt=""/>

                    <Link to='/main-provider/tariff' className="card">
                        <div className="animCard">
                            <div className="imgBox">
                                <img src="img/int.jpg" alt=""/>
                                <h2>Интернет</h2>
                            </div>
                            <div className="content">

                                <p>  Мы сделаем это в максимально короткие срок</p>
                            </div>
                        </div>
                    </Link>



                    <Link to='/main-provider/view-ip-tv'  className="card">
                        <div className="animCard">
                        <div className="imgBox">
                            <img src="img/iptv2.jpg" alt=""/>
                            <h2>IP TV</h2>

                        </div>
                        <div className="content">
                            <p>Обратите внимание на тарифы телевидения по оптимальной цене.</p>
                        </div>
                        </div>
                    </Link>


                    <Link to='/main-provider/view-ip-phone'  className="card">
                        <div className="animCard">
                        <div className="imgBox">
                            <img src="img/ipt.jpg" alt=""/>
                            <h2>IP телефония</h2>

                        </div>
                        <div className="content">
                            <p>Звоните куда угодно и когда угодно с помощью технологии IP-АТС.</p>
                        </div>
                    </div>

                    </Link>
                </div>





            </div>
        );
    }
}

export default RecBox;