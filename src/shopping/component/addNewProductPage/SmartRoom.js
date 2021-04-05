import React, {Component} from 'react';
import '../../../component/main.scss'
import axios from "axios";
import {  API_PATH_SELLOFFICE} from "../../../tools/constants";

class SmartRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],


        }
    }


    componentDidMount() {
        axios.get(API_PATH_SELLOFFICE + "smart-room-list")
            .then(res =>{

                this.setState({posts: res.data.results})

                console.log(res)
            })
            .catch(error => {
                console.log('error')
            })





        window.scrollTo(0, 0);

    }


    render() {
        return (
            <div className="smartRoom">
                <div className="container" >


                    {
                        this.state.posts.map(item =>(
                            <div className="row" data-aos="fade-left"   data-aos-duration="1500">
                                <img src={item.img} alt=""/>

                                <div className="smartRoomTitle">

                                    <img src={item.icon} alt=""/>
                                    <h3>{item.title} </h3>

                                    <p dangerouslySetInnerHTML={{ __html: item.content }}/>

                                </div>



                            </div>

                        ))
                    }





                </div>
            </div>
        );
    }
}

export default SmartRoom;