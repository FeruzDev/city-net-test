import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH_MAIN} from "../../../tools/constants";
import NavbarShopping from "../NavbarShopping";
import ProductFooter from "../ProductFooter";
import ProductAboutNewsItem from "./ProductAboutNewsItem";

class ProductSearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            news: [],
            inputText: ""
        }
    }

    componentDidMount() {
        axios.get(API_PATH_MAIN + "news-list/?search=" + this.props.match.params.search)
            .then(res => {
                    this.setState({news: res.data.results})
            })

        axios.get(API_PATH_MAIN + "news-list")
            .then(res =>{

                this.setState({posts: res.data.results})

                console.log(res)
            })
            .catch(error => {
                console.log('error')
            })

    }

    render() {

        const search = () => {
            axios.get(API_PATH_MAIN + "news-list/?search=" + this.state.inputText)
                .then(res => {
                    this.setState({news: res.data.results})
                })
        }
        return (
            <div>
                <NavbarShopping/>



                <div className="aboutNews">
                    <div className="aboutBackFon">
                        <h2>Новости</h2>
                    </div>

                    <Container >
                        <Row>
                            <Col md={8}>



                                {this.state.news.length > 0 ? this.state.news.reverse().map((item, index)=> (

                                    <ProductAboutNewsItem index={index} date_created={item.date_created} img={item.img}
                                                   title={item.title} body={item.content} id={item.id} view={item.view}/>
                                )) : <h3 className='text-center my-5'>Ничего не найдено</h3>}

                            </Col>
                            <Col md={4}>
                                <div className="inputGroupM">
                                    <div className="inputGroup">
                                        <input type="text" onChange={(e) => this.setState({inputText: e.target.value})}  placeholder="Поиск..." />
                                    </div>
                                    <Link to={'/main-provider/news/' + this.state.inputText} onClick={search} className=" pt-2 searchBtn">ПОИСК</Link>
                                </div>
                                <div className="category">
                                    <h2>Категория</h2>
                                    <div>
                                        <a href="#!">
                                            Интернет <span>{this.state.posts.filter(item => item.category === 1).length}</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#!">
                                            IP TV <span>{this.state.posts.filter(item => item.category === 2).length}</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#!">
                                            IP телефония <span>{this.state.posts.filter(item => item.category === 3).length}</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="recentPost">
                                    <h2>Недавний пост</h2>




                                    {this.state.posts.slice(0, 4).map((item, index)=>(

                                        <div>
                                            <img src={item.img} alt="News image cap"/>
                                            <p>
                                                <Link to={'news-detail/' + item.id} >{item.title}</Link>
                                                <span>{item.date_created}</span>
                                            </p>
                                        </div>
                                    ))}

                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>
                <ProductFooter/>
            </div>
        );
    }
}

export default ProductSearchPage;