import React, {Component} from 'react';
import axios from "axios";
import {API_PATH_MAIN} from "../tools/constants";

class ChooseCards extends Component {

    constructor() {
        super();
        this.state = {
            posts :[]
        }


    }


    componentDidMount(){
        axios.get(API_PATH_MAIN + 'working-process-list/')
            .then(res => {
                this.setState({posts: res.data.results})
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {


        return (
            <div className="chooseCards">

                <h1>Как мы работаем</h1>



                {
                    this.state.posts.map((item, i) => (

                    !(i % 2)
                        ? <div key={i} className="container">
                            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">

                                <div className="row about-company mt-5">
                                    <div className="col-md-5">
                                        <img src={item.img} alt="" className="w-100"/>
                                    </div>
                                    <div className="col-md-7 align-self-center text-justify">
                                        <h3 className="mb-2">{item.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.content } }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div key={i} className="container">
                            <div data-aos="fade-up"
                                 data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                                <div className="row">
                                    <div className="col-md-7 align-self-center text-justify">
                                        <h3>{item.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.content } }/>

                                    </div>

                                    <div className="col-md-5">
                                        <img src={item.img} alt="" class="w-100"/>
                                    </div>


                                </div>
                            </div>

                        </div>

                ))}


            </div>
        );
    }
}

export default ChooseCards;