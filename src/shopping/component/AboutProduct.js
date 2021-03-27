import React, {Component} from 'react';

import AOS from 'aos';

class AboutProduct extends Component {

    constructor(props, context) {
        super(props, context);
        AOS.init();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div className='container'>
                <div className="AboutCompany">

                    <h1 className="aboutCompanyTitle">Преимущества компании "CityNet"</h1>

                    <div className="aboutCompanyP">

                        <div className="companyList">
                            <div data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>
                                <h4>Предоставление услуг интернета</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Интеллектуальное видеонаблюдение</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Охранно-пожарная сигнализация</h4>
                            </div>
                        </div>


                        <div className="companyList">
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Система пожаротушения</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Системы контроля и управления доступом</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Парковочная система</h4>
                            </div>
                        </div>




                        <div className="companyList">
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>IP и аналоговая телефония</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Огнезащитная обработка конструкций</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Звуковое оповещение и управление эвакуаций</h4>
                            </div>
                        </div>


                        <div className="companyList">
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Системы конференц связи</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Центр обработки вызовов</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Автоматизация инженерных систем</h4>
                            </div>
                        </div>


                        <div className="companyList">
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Поставка специализированного оборудования для</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Структурирование кабельных сетей (ЛВС, ВОЛС, телефония)</h4>
                            </div>
                            <div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <img src="img/recIcon/cam.png" alt=""/>

                                <h4>Поставка специализированного оборудования для</h4>

                            </div>
                        </div>




                    </div>



                    {/*<Counter></Counter>*/}

                    {/*<Partners></Partners>*/}
                </div>
                {/*<Footer></Footer>*/}
            </div>
        );
    }
}

export default AboutProduct;