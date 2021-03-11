import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";


class TestViewIpTv extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="whatAreWedoing">
                <Navbar></Navbar>
                <div className='container'>
                    <h2>Интернет-провайдер</h2>
                    <div className="row">


                        <div className="col-md-4">
                            <img src="/img/rrr.jpg" alt="img"/>
                        </div>


                        <div className="col-md-8">
                            <p>«City Net» - новый интернет-провайдер на рынке услуг связи Узбекистана. Нашей
                                отличительной особенностью является профессиональный, инновационный и индивидуальный
                                подход к каждому абоненту.
                                За короткий срок мы готовы завоевать «сердца» многих абонентов и
                                стать одним из лидеров среди интернет-провайдеров, предоставляющих весь спектр
                                телекоммуникационных услуг. Уже сегодня мы предлагаем бизнес решения для компаний любого
                                масштаба.
                            </p>
                        </div>


                        <h4>«City Net» - это все преимущества с одним оператором связи: предоставление в рамках одного
                            подключения полного пакета высококачественных телекоммуникационных услуг таких как:</h4>

                        <ul>
                            <li>Подключение высокоскоростного и безлимитного Интернета</li>
                            <li>IP телефония</li>
                            <li>VPN</li>
                            <li>Интерактивное телевидение</li>
                            <li>Видеонаблюдени</li>
                            <li>Хостинг</li>
                        </ul>

                    </div>

                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default TestViewIpTv;