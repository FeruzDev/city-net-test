import React, {Component} from 'react';
import {Col, Container, Row, Card } from "reactstrap";
import NavbarShopping from "../NavbarShopping"
import ProductFooter from "../ProductFooter"
import {Link} from "react-router-dom";
import axios from "axios";
import Search from "../../../component/Search";
import {API_PATH_MAIN} from "../../../tools/constants";
import ProductAboutNewsItem from "./ProductAboutNewsItem";
import ProductSearch from "./ProductSearch";
class ProductAboutNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            serPosts: []

        }
    }






    componentDidMount() {
        axios.get(API_PATH_MAIN + "news-list")
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
            <div>
                <NavbarShopping />



                <div className="aboutNews">
                    <div className="aboutBackFon">
                        <h2>Новости</h2>
                    </div>

                    <Container >
                        <Row>
                            <Col md={8}>


                                {this.state.posts.filter(item => item.type === 'sell_office').map((item, index)=> (


                                    <ProductAboutNewsItem index={index} date_created={item.date_created} img={item.img}
                                                          title={item.title} body={item.content} id={item.id} view={item.view}/>

                                ))}

                            </Col>
                            <Col md={4}>
                                <ProductSearch />
                                <div className="category">
                                    <h2>Категория</h2>
                                    <div className='d-flex flex-wrap'>
                                        {this.state.serPosts.filter(item2 => item2.sell_office === false).map((item2, index)=> (


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



                                        <div>
                                            <img src={item.img} alt="News image cap"/>
                                            <p>
                                                <Link to={'news/news-detail/' + item.id} >{item.title}</Link>
                                                <span>{item.date_created}</span>
                                            </p>
                                        </div>

                                        //     )}
                                        // return null



                                    ))}

                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>
                <ProductFooter />
            </div>
        );
    }
}

export default ProductAboutNews;