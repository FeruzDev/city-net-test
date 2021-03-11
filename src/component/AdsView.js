


import React, {Component} from 'react';
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Col} from "reactstrap";

class AdsView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }


    componentDidMount() {
        console.log(this.props);
        axios.get("http://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then(res => {
                this.setState({post: res.data});
            })
    }

    render() {
        return (
     <div className='adsView'>
         <Navbar></Navbar>
         <div className="aboutBackFon"><h2>Oбъявление</h2></div>

         <div className='container'>
             <div className="row">

                 <div className="adsImg">
                     <img src="/img/ipt.jpg" alt=""/>
                 </div>

                         <div className="cardAdsTitle">
                             <h3>{this.state.post.title}</h3>
                         </div>
                         <div className="cardAdsBody">
                          <p>
                              {this.state.post.body}
                          </p>

                 </div>
             </div>
         </div>
         <Footer></Footer>
     </div>
        );
    }
}

export default AdsView;