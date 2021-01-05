import React, {Component} from 'react';
import Company from "../component/Company";
import Partners from "../component/Partners";
import Counter from "../component/Counter";

class AboutCompany extends Component {
    render() {
        return (
            <div className="AboutCompany">
                <div className="aboutBackFon">
                    <h2>О компании</h2>
                </div>
                <h1 className="aboutCompanyTitle">Преимущества компании "CityNet"</h1>

                <section>

                    <ul>
                        <li><img src="img/icon/badge.svg" alt=""/>Предоставление услуг интернета</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Интеллектуальное видеонаблюдение</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Охранно-пожарная сигнализация</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Система пожаротушения</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Системы контроля и управления доступом</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Парковочная система</li>
                        <li><img src="img/icon/badge.svg" alt=""/>IP и аналоговая телефония</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Огнезащитная обработка конструкций</li>

                    </ul>
                    <ul>
                        <li><img src="img/icon/badge.svg" alt=""/>Звуковое оповещение и управление эвакуаций</li>

                        <li><img src="img/icon/badge.svg" alt=""/><p>Поставка специализированного оборудования для
                            слаботочных систем</p></li>
                        <li><img src="img/icon/badge.svg" alt=""/>Центр обработки вызовов</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Автоматизация инженерных систем</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Структурирование кабельных сетей (ЛВС, ВОЛС,
                            телефония)
                        </li>
                        <li><img src="img/icon/badge.svg" alt=""/>Системы конференц связи</li>
                        <li><img src="img/icon/badge.svg" alt=""/>Проектирование слаботочных систем</li>
                    </ul>
                </section>

                <Company></Company>
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