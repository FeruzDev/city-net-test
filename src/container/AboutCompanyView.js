import React, {Component} from 'react';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {API_PATH_MAIN} from "../tools/constants";
import axios from "axios";


class AboutCompanyView extends Component {

    constructor() {
        super();
        this.state={
            post: {}
        }

    }
    componentDidMount() {

        axios.get(API_PATH_MAIN + 'service-detail/' + this.props.match.params.id)
            .then(res =>{
                this.setState({post: res.data })
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="whatAreWedoing">

                <Navbar />


                <div className="aboutBackFon">
                    <h2>{this.state.post.title}</h2>
                </div>

                <div className='container'>

                    <div className="row">


                        <div className="col-md-4">
                            <img src={this.state.post.img} alt="img"/>
                        </div>


                        <div className="col-md-8">
                            <h3 className='ml-5 pl-3  font-weight-bold'>  {this.state.post.title}</h3>
                            <h4  dangerouslySetInnerHTML={{ __html: this.state.post.top_content } } />
                        </div>


                        <h3 className='w-100' dangerouslySetInnerHTML={{ __html: this.state.post.bottom_content } } />




                        {/*<ul>*/}
                        {/*    <li>Подключение высокоскоростного и безлимитного Интернета</li>*/}
                        {/*    <li>IP телефония</li>*/}
                        {/*    <li>VPN</li>*/}
                        {/*    <li>Интерактивное телевидение</li>*/}
                        {/*    <li>Видеонаблюдени</li>*/}
                        {/*    <li>Хостинг</li>*/}
                        {/*</ul>*/}

                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default AboutCompanyView;