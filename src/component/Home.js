import React, {Component} from 'react';
import NavbarMain from "./Navbar";
import App from "./App";
import {API_PATH} from "../tools/constants";
import axios from "axios";
class Home extends Component {


    constructor() {
        super();
        this.state ={
            posts: {}
        }
    }


    componentDidMount() {
        axios.get(API_PATH + "banner-img-list/")
            .then(res=>{
                this.setState({posts: res.data.results})

            })
    }

    render() {
        return (
            <div className="Home">


                <NavbarMain/>
                <App/>


                <img className='homeBackground' src={this.state.posts[0] ? this.state.posts[0].img : ""} alt=""/>

                <div className="animated-text">
                    <div className="line"><span>Скорост</span></div>
                    <div className="line"><span>Безопастность</span></div>
                    <div className="line"><span>Интеллектуальность</span></div>
                </div>
            </div>
        );
    }
}

export default Home;