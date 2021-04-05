import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import AboutNewsItem from "./AboutNewsItem";
import {API_PATH_MAIN} from "../tools/constants";
import Search from "../component/Search";

class AboutNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            serPosts: []

        }

        this.posts = [];
    }

    componentDidMount() {
        axios.get(API_PATH_MAIN + "news-list")
            .then(res =>{
                var filteredRes = res.data.results.filter(item => item.type === 'provider');
                this.setState({posts: filteredRes});
                this.posts = filteredRes;

                console.log(res)
            })
            .catch(error => {
                console.log('error')
            })


        axios.get(API_PATH_MAIN + "service-list")
            .then(res2 =>{
                var filteredRes = res2.data.results.filter(item => item.sell_office === false);
                this.setState({serPosts: filteredRes});

                console.log(res2)
            })
            .catch(error => {
                console.log('error')
            })

        window.scrollTo(0, 0);

    }

    onClickService(service) {
        console.log(service);
        var filteredNews = this.posts.filter(post => {
            return (post.category === service.id && post.type === 'provider');
        });
        console.log(filteredNews);
        console.log(this.posts);
        this.setState({posts: filteredNews});
    }

    render() {
        return (
            <div>
                <Navbar />



                <div className="aboutNews">
                    <div className="aboutBackFon">
                        <h2>Новости</h2>
                    </div>

                    <Container >
                        <Row>
                            <Col md={8}>


                                {this.state.posts.map((item, index)=> (


                                    <AboutNewsItem index={index} date_created={item.date_created} img={item.img}
                                                          title={item.title} body={item.content} id={item.id} view={item.view}/>

                                ))}

                            </Col>
                            <Col md={4}>
                                <Search />
                                <div className="category">
                                    <h2>Категория</h2>
                                    <div className='d-flex flex-wrap'>
                                        {this.state.serPosts.map((item2, index)=> (


                                            <button onClick={this.onClickService.bind(this, item2)} className="w-100 mt-3">

                                                    {item2.title}
                                                    <span>  ({this.posts.filter(item3 => item2.id === item3.category).length})</span>

                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="recentPost">
                                    <h2>Недавний пост</h2>

                                    {this.state.posts.slice(0, 4).map((item, index)=>(



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
                <Footer />
            </div>
        );
    }
}

export default AboutNews;