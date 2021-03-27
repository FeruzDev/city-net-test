

import React, {Component} from 'react';
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../tools/constants";

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
                        <div>
                            <img src="./img/shoppingImg/file2.svg" alt=""/>
                            <p>Настройка упаковки</p>
                        </div>
                        <div>
                            <img src="./img/shoppingImg/diamond.svg" alt=""/>
                            <p>Рисование логотипа</p>
                        </div>
                        <div>
                            <img src="./img/shoppingImg/pencil.svg" alt=""/>
                            <p>Настройка рисунка и материала</p>
                        </div>
                        <div>
                            <img src="./img/shoppingImg/demand.svg" alt=""/>
                            <p>Настройка руководства по эксплуатации</p>
                        </div>
                        <div>
                            <img src="./img/shoppingImg/instructions.svg" alt=""/>
                            <p>Настройка приложения</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Platform;

