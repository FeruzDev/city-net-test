import React, {Component} from 'react';


class RecBox extends Component {
    render() {
        return (
            <div className="RecCard">


                <div className="container2">


                    <h1>Воспользуйтесь Нашими Услугами</h1>



                    <img className="backFon1" src="img/backFon.svg" alt=""/>




                        <img className="backFon2" src="img/backFon.svg" alt=""/>

                    <div className="card">
                        <div className="imgBox">
                                <img src="img/int.jpg" alt=""/>
                            <h2>Интернет</h2>
                        </div>
                            <div className="content">
                                {/*<h2>Интернет</h2>*/}
                                <p>Подключить Интернет в офис ? Не вопрос ! Мы сделаем это в максимально короткие срок</p>
                        </div>
                    </div>



                    <div className="card">
                        <div className="imgBox">
                            <img src="img/iptv2.jpg" alt=""/>
                            <h2>IP TV</h2>

                        </div>
                        <div className="content">
                            <p>Обратите внимание на тарифы телевидения по оптимальной цене.</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="imgBox">
                            <img src="img/ipt.png" alt=""/>
                            <h2>IP телефония</h2>

                        </div>
                        <div className="content">
                            <p>Звоните куда угодно и когда угодно с помощью технологии IP-АТС.</p>
                        </div>
                    </div>

                </div>





            </div>
        );
    }
}

export default RecBox;