


import React, {Component} from 'react';
import axios from 'axios';
import {Card, Col, Container, Row} from "reactstrap";
import * as PropTypes from "prop-types";

import {Link} from 'react-router-dom'
import AdsFullCon from "../../../component/AdsFullCon";
import ProductFooter from "../ProductFooter";
import NavbarShopping from "../NavbarShopping";
import AdsSearch from "../../../component/AdsSearch";
import {API_PATH_MAIN} from "../../../tools/constants";
import ProductAdsFullCon from "./ProductAdsFullCon";
import ProductAdsSearch from "./ProductAdsSearch";


Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};

class ProductAds extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            serPosts: []

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
            })


        axios.get(API_PATH_MAIN + "service-list")
            .then(res2 =>{

                this.setState({serPosts: res2.data.results})

                console.log(res2)
            })
            .catch(error => {
                console.log('error')
            })


        window.scrollTo(0, 0);

    }

    render() {




        return (


            <div className='aboutAds'>
                <NavbarShopping />


                <div className="aboutBackFon"><h2>Oбъявление</h2></div>

                <Container >
                    <Row>
                        <Col md={8}>


                            {this.state.posts.filter(item => item.type === 'sell_office').map((item, index)=>(



                                // if(item.category === 1){
                                // return (
                                <ProductAdsFullCon   from_date={item.from_date} img={item.img} title={item.title} body={item.content} id={item.id} view={item.view}/>


                                // )}
                                // return null



                            ))}


                        </Col>
                        <Col md={4}>
                            <ProductAdsSearch />
                            <div className="category">
                                <h2>Категория</h2>
                                <div className='d-flex flex-wrap'>
                                    {this.state.serPosts.filter(item2 => item2.sell_office === true).map((item2, index)=> (


                                        <Link className="w-100 mt-3">

                                            <a href="#!">
                                                {item2.title}
                                                <span>  ({this.state.posts.filter(item3 => item2.id === item3.category).length})</span>

                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="recentPost">
                                <h2>Недавний пост</h2>



                                {this.state.posts.filter(item => item.type === 'sell_office').slice(0, 4).map((item, index)=>(


                                    // if(item.category === 1){
                                    //     return (

                                    <div>
                                        <img src={item.img} alt="News image cap"/>
                                        <p>

                                            <Link to={'ads/advertisement-detail/' + item.id} >{item.title}</Link>
                                            <span>{item.created_date}</span>

                                        </p>
                                    </div>

                                    //     )}
                                    // return null



                                ))}




                            </div>
                        </Col>
                    </Row>
                </Container>


                <ProductFooter />
            </div>

        );


    }
}

export default ProductAds;