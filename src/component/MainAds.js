
import React, {Component} from 'react';
import AdsItem from "./AdsItem";
import axios from 'axios';
import {API_PATH, API_PATH_MAIN} from "../tools/constants";

class MainAds extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get(API_PATH_MAIN + "advertisement-list")
            .then(res =>{

                this.setState({posts: res.data.results})

                console.log(res)
            })
            .catch(error => {
                console.log('error')
                console.log(error)
            })


        window.scrollTo(0, 0);

    }


    render() {
        return (


            <div className="mainAds">

                <div className='container'>
                    <h1 className="ml-0" >Oбъявление</h1>
                    <div className="row"   data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1000" >



                        {this.state.posts.slice(this.state.posts.length - 1).map((item) => (

                            <AdsItem title={item.title} img={item.img} content={item.content} id={item.id}/>






                        ))}
                    </div>
                </div>

            </div>

        );


    }
}

export default MainAds;