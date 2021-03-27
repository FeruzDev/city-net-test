


import React, {Component} from 'react';
import axios from "axios";
import {API_PATH_MAIN} from "../../../tools/constants";
import NavbarShopping from "../NavbarShopping";
import ProductFooter from "../ProductFooter";

class ProductAboutNewsView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }



    componentDidMount() {
        console.log(this.props)
        axios.get(API_PATH_MAIN + "news-detail/" + this.props.match.params.id)
            .then(res =>{

                this.setState({post: res.data})

                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })


        window.scrollTo(0, 0);

    }

    render() {
        return (
            <div className='adsView'>
                <NavbarShopping />
                <div className="aboutBackFon"><h2>Новости</h2></div>

                <div className='container mt-5'>
                    <div className="row">

                        <div className="adsImg">
                            <img src={this.state.post.img}/>
                        </div>

                        <div className="cardAdsTitle">
                            <h3>{this.state.post.title}</h3>
                        </div>
                        <div className="cardAdsBody">
                            <p dangerouslySetInnerHTML={{ __html: this.state.post.content }}/>


                        </div>
                    </div>
                </div>
                <ProductFooter />
            </div>
        );
    }
}

export default ProductAboutNewsView;