import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap/dist/reactstrap.es";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { API_PATH_MAIN} from "../tools/constants";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Contact extends Component {


    constructor() {
        super();
        this.state = {
            userName: '',
            userNumber: '',
            topic: '',
            content: '',
            type : 'provider'
        }
    }


    componentDidMount() {





        window.scrollTo(0, 0);
    }



    postForm = (e) =>{

        this.setState({[e.target.name]: e.target.value})
    }

    submitPost = e =>{
        e.preventDefault()
        console.log(this.state)
        let data = new FormData();
        data.append("name", this.state.userName)
        data.append("number", this.state.userNumber)
        data.append("title", this.state.topic)
        data.append("content", this.state.content)
        data.append("type", this.state.type)

        axios.post('http://api.citynet.uz/ru/api/main/contact-list-create/ ', data)
            .then(res=>{

                if (res.status === 201){
                    toast.success("Успешно отправлен")
                } else {
                    toast.error("Oшибка");
                }
            })


            .catch(error => {
                console.log(error)
            })


        this.setState({
            userName: '',
            userNumber: '',
            topic: '',
            content: '',
        });



    }


    render() {

        const {userName, userNumber, topic, content} = this.state
        return (
           <div>
               <Navbar />
               <div  className="Contact">
                   <div className="aboutBackFon">
                       <h2>СВЯЗАТЬСЯ С НАМИ</h2>
                   </div>
                   <ToastContainer />
                   <Container>
                       <Row>
                           <Col md={7}>


                               <h3>Связаться</h3>
                               <form onSubmit={this.submitPost}>

                                   <fieldset>
                                       <input    name='userName'
                                                 placeholder='Введите свое полное имя'
                                                 value={userName}
                                                 required

                                                 type='text'
                                                 autoComplete="off"

                                                 onChange={this.postForm}
                                       />
                                   </fieldset>
                                   <fieldset>
                                       <input  name='userNumber'
                                               placeholder=' Введите номер телефона'
                                               value={userNumber}
                                               required

                                               type='text'
                                               autoComplete="off"
                                               onChange={this.postForm}

                                       />
                                   </fieldset>

                                   <fieldset>
                                       <input  name='topic'
                                               placeholder=' Введите тему'
                                               value={topic}
                                               required

                                               type='text'
                                               autoComplete="off"
                                               onChange={this.postForm}


                                       />

                                   </fieldset>


                                   <fieldset>
                                          <textarea    name='content'
                                                       placeholder='Введите сообщение'
                                                       value={content}
                                                       required
                                                       type='textarea'
                                                       onChange={this.postForm}

                                          />
                                   </fieldset>
                                   <fieldset>
                                       <button name="submit" type="submit"   >
                                           ОТПРАВИТЬ
                                       </button>
                                   </fieldset>

                               </form>



                           </Col>
                           <Col md={5}>
                               <div className="footer-center">

                                   <div>

                                       <a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976"
                                          className="footerIcon">
                                           <img src="/img/icon/geo.svg" alt=""/>
                                       </a>
                                       <p><span><a href="https://www.google.ru/maps/place/%D0%A1%D0%B8%D1%82%D0%B8+%D0%9C%D0%B0%D0%BA%D0%BE%D0%BD/@41.3017691,69.2441976,18z/data=!4m5!3m4!1s0x38ae8b01bea9ed3f:0x1b69999ff8968c99!8m2!3d41.3017691!4d69.2441976">Ташкент, Чилонзор</a></span> Улица Сеула, дом 14</p>
                                   </div>

                                   <div>
                              <span className="footerIcon">
                            <img src="/img/icon/telephone (1).svg" alt=""/>
                            </span>
                                       <p><span><a href="tel:+998712021111"  target="_blank">+998 71 202 1111 </a></span>Колл-центр 24/7</p>


                                   </div>

                                   <div>
                             <span className="footerIcon">
                            <img src="/img/icon/info (1).svg" alt=""/>
                            </span>
                                       <p><span> <a href="mailto:info@citynet.uz" target="-_blank">info@citynet.uz</a></span>Отправьте нам свой запрос  <br/> в любое время!</p>
                                   </div>

                               </div>

                           </Col>
                       </Row>
                   </Container>
               </div>
               <Footer />
           </div>
        );
    }
}

export default Contact;