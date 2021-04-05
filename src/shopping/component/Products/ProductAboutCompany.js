import React, {Component} from 'react';

import AOS from 'aos';
import axios from "axios";
import {Link} from "react-router-dom";
import {API_PATH_MAIN} from "../../../tools/constants";

class ProductAboutCompany extends Component {

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
                                this.state.posts.reverse().filter(item2=> item2.sell_office=== true).map(item =>(
                                    <Link to={'main/service-detail/' + item.id}  data-aos="fade-up" data-aos-offset=" 0" data-aos-easing="ease-in-sine" data-aos-duration="1000">

                                        <img src={item.icon} alt=""/>
                                        <h4>{item.title}</h4>

                                    </Link>

                                ))
                            }



                        </div>




                    </div>



                </div>

            </div>
        );
    }
}

export default ProductAboutCompany;