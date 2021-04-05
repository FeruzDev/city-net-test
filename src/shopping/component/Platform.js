

import React, {Component} from 'react';
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../tools/constants";
import {Col, Row} from "reactstrap";

class Platform extends Component {


    constructor() {
        super();

        this.state = {
            posts: []
        }
    }


    componentDidMount() {


        axios.get(API_PATH_SELLOFFICE + "innovation-tech-list/")
            .then(res => {
                this.setState({posts: res.data.results})
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <div className="Platform">
                    <h1>Мы больше, чем платформа для поиска поставщиков</h1>


                    {

                    }
                    <div className="platformItems container    ">



                        {
                            this.state.posts.filter(item => item.position === "bottom").map((item) => (
                                <div>
                                    <img  src={item.img} alt=""/>
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        );
    }
}

export default Platform;

