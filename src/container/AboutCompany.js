import React, {Component} from 'react';

import AOS from 'aos';
import axios from "axios";
import {API_PATH_MAIN} from "../tools/constants";
import {Link} from "react-router-dom";

class AboutCompany extends Component {

    constructor(props, context) {
        super(props, context);
        AOS.init();

        this.state={
            posts: []
        }
    }

    componentDidMount() {
        axios.get(API_PATH_MAIN + "service-list/")
            .then(res =>{
                this.setState({posts: res.data.results})
                console.log(res)
            })



    }


    render() {
        return (
         <div className='container'>
             <div className="AboutCompany">

                 <h1 className="aboutCompanyTitle">Преимущества компании "CityNet"</h1>

                 <div className="aboutCompanyP">

                     <div className="companyList">



                         {
                             this.state.posts.reverse().map(item =>(
                                 <Link to={'main/service-detail/' + item.id}  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">

                                         <img src={item.icon} alt=""/>
                                         <h4>{item.title}</h4>

                                 </Link>

                             ))
                         }

                         {/*<div data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i1.png" alt=""/>*/}
                         {/*    <h4>Предоставление услуг интернета</h4>*/}
                         {/*</div>*/}

                         {/*<div  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i2.png" alt=""/>*/}

                         {/*    <h4>Системы конференц связи</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i3.png" alt=""/>*/}

                         {/*    <h4>Охранная и пожарная сигнализация</h4>*/}
                         {/*</div>*/}


                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i4.png" alt=""/>*/}

                         {/*    <h4>Система контроля и управления доступом</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i5.png" alt=""/>*/}

                         {/*    <h4>Домофоны</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i6.png" alt=""/>*/}

                         {/*    <h4>Cтруктурированние кабельной сети</h4>*/}
                         {/*</div>*/}




                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i8.png" alt=""/>*/}

                         {/*    <h4>Электромонтажные работы</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i10.png" alt=""/>*/}

                         {/*    <h4>BMS и RMS</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i11.png" alt=""/>*/}

                         {/*    <h4>Разработка веб-приложений</h4>*/}
                         {/*</div>*/}


                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i12.png" alt=""/>*/}

                         {/*    <h4>Автоматическая парковка </h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*       <img src="img/mainIcon/i14.png" alt=""/>*/}

                         {/*    <h4>Противопожарная обработка</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i15.png" alt=""/>*/}

                         {/*    <h4>Речевое оповещение</h4>*/}
                         {/*</div>*/}


                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i16.png" alt=""/>*/}

                         {/*    <h4>Пожаротушение</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i7.png" alt=""/>*/}

                         {/*    <h4>Телефония</h4>*/}
                         {/*</div>*/}
                         {/*<div  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">*/}
                         {/*    <img src="img/mainIcon/i9.png" alt=""/>*/}

                         {/*    <h4>Телевидение</h4>*/}
                         {/*</div>*/}

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

export default AboutCompany;