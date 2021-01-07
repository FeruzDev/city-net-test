import React, {Component} from 'react';
import Partners from "../component/Partners";
import Counter from "../component/Counter";
import AOS from 'aos';
class AboutCompany extends Component {

    constructor(props, context) {
        super(props, context);
        AOS.init();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div className="AboutCompany">
                <div className="aboutBackFon">
                    <h2>О компании</h2>
                </div>
                <h1 className="aboutCompanyTitle">Преимущества компании "CityNet"</h1>

                <div className="aboutCompanyP">


                    {/*    <li><img src="img/icon/badge.svg" alt=""/>Проектирование слаботочных систем</li>*/}


                    <div className="companyList">
                        <div data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Предоставление услуг интернета</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Интеллектуальное видеонаблюдение</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Охранно-пожарная сигнализация</h4>
                        </div>
                    </div>


                    <div className="companyList">
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Система пожаротушения</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Системы контроля и управления доступом</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Парковочная система</h4>
                        </div>
                    </div>




                    <div className="companyList">
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>IP и аналоговая телефония</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Огнезащитная обработка конструкций</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Звуковое оповещение и управление эвакуаций</h4>
                        </div>
                    </div>


                    <div className="companyList">
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Системы конференц связи</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Центр обработки вызовов</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Автоматизация инженерных систем</h4>
                        </div>
                    </div>


                    <div className="companyList">
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Поставка специализированного оборудования для</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Структурирование кабельных сетей (ЛВС, ВОЛС, телефония)</h4>
                        </div>
                        <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="100">
                            <h4>Поставка специализированного оборудования для</h4>

                        </div>
                    </div>




                </div>


                <main>
                    <h1>Дополнительные услуги компании CityNet</h1>
                    <p>Компания "CityNet" предлагает полный спектр услуг от проектирования до внедрения, а так же
                        разработает индивидуальные решения для вашего проекта с учетом его специфики.</p>
                    <p>Компанией разработана система технической поддержки клиентов в режиме 24/7.</p>
                </main>
                <Counter></Counter>

                <Partners></Partners>
            </div>
        );
    }
}

export default AboutCompany;