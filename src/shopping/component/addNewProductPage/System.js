import React, {Component} from 'react';
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../../tools/constants";

class System extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],

            numberOfitemsShown: 4
        }
        this.loadMore = this.loadMore.bind(this);
    }


    componentDidMount() {
        axios.get(API_PATH_SELLOFFICE + "product-list")
            .then(res =>{

                this.setState({posts: res.data.results})

                console.log(res)
            })
            .catch(error => {
                console.log('error')
            })




    }
    loadMore() {
        this.setState({
            numberOfitemsShown:  this.state.numberOfitemsShown + 1
        });
    }
    render() {
        return (
            <div className="system">
                <div className="container">

                    {
                        this.state.posts.slice(0, this.state.numberOfitemsShown).map(item =>

                             <div className="row"  data-aos="fade-up"   data-aos-duration="1500" >
                                <div className="col-md-6">

                                    <div className="systemBack"/>
                                    <img className="leftImg" src={item.img1} alt=""/>
                                    <p dangerouslySetInnerHTML={{ __html: item.content }}/>
                                </div>
                                <div className="col-md-6">
                                    <h1>{item.title}</h1>
                                    <div className="systemBack2"/>
                                    <img src={item.img2} alt="" className="rightImg"/>

                                </div>
                            </div>
                        )
                    }

                    <div className="shoppingCardMore w-100 text-center ">
                        <button className="shoppingCardMore2" onClick={this.loadMore}>More</button>

                    </div>
                </div>

            </div>
        );
    }
}

export default System;