// import React, {Component} from 'react';
// import Navbar from "./Navbar";
// import {Col, Container, Row} from "reactstrap";
// import AboutNewsItem from "../container/AboutNewsItem";
// import Search from "./Search";
// import {Link} from "react-router-dom";
// import Footer from "./Footer";
// import axios from "axios";
// import {API_PATH_MAIN} from "../tools/constants";
//
// class SearchPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: [],
//             news: [],
//             inputText: "",
//             serPosts: []
//         }
//     }
//
//     componentDidMount() {
//         axios.get(API_PATH_MAIN + "news-list/?search=" + this.props.match.params.search)
//             .then(res => {
//                     this.setState({news: res.data.results})
//             })
//
//         axios.get(API_PATH_MAIN + "news-list")
//             .then(res3 =>{
//
//                 this.setState({posts: res3.data.results})
//
//
//             })
//             .catch(error => {
//                 console.log('error')
//             })
//
//
//
//             axios.get(API_PATH_MAIN + "service-list")
//             .then(res2 =>{
//
//                 this.setState({serPosts: res2.data.results})
//
//             })
//             .catch(error => {
//                 console.log('error')
//             })
//
//
//     }
//
//     render() {
//
//         const search = () => {
//             axios.get(API_PATH_MAIN + "news-list/?search=" + this.state.inputText)
//                 .then(res => {
//                     this.setState({news: res.data.results})
//                 })
//         }
//         return (
//             <div>
//                 <Navbar/>
//
//
//
//                 <div className="aboutNews">
//                     <div className="aboutBackFon">
//                         <h2>Новости</h2>
//                     </div>
//
//                     <Container >
//                         <Row>
//                             <Col md={8}>
//
//
//
//                                 {this.state.news.length > 0 ? this.state.news.reverse().map((item, index)=> (
//
//                                     <AboutNewsItem index={index} date_created={item.date_created} img={item.img}
//                                                    title={item.title} body={item.content} id={item.id} view={item.view}/>
//                                 )) : <h3 className='text-center my-5'>Ничего не найдено</h3>}
//
//                             </Col>
//                             <Col md={4}>
//                                 <div className="inputGroupM">
//                                     <div className="inputGroup">
//                                         <input type="text" onChange={(e) => this.setState({inputText: e.target.value})}  placeholder="Поиск..." />
//                                     </div>
//                                     <Link to={'/main-provider/news/' + this.state.inputText} onClick={search} className=" pt-2 searchBtn">ПОИСК</Link>
//                                 </div>
//                                 <div className="category">
//
//
//                                 <h2>Категория</h2>
//
//
//
//
//                                 <div className='d-flex flex-wrap'>
//                                     {this.state.serPosts.filter(item2 => item2.sell_office === false).map((item2, index)=> (
//
//
//                                         <Link className="w-100 mt-3" to={'/main-provider/news/' + item2.id}>
//
//
//                                                 {item2.title}
//                                                 <span>  ({this.state.posts.filter(item3 => item2.id === item3.category).length})</span>
//
//                                         </Link>
//                                     ))}
//                                 </div>
//
//
//                             </div>
//
//                                 <div className="recentPost">
//                                     <h2>Недавний пост</h2>
//
//
//
//
//                                     {this.state.posts.filter(item => item.type === 'provider').slice(0, 4).map((item, index)=>(
//
//
//
//                                         <div>
//                                             <img src={item.img} alt="News image cap"/>
//                                             <p>
//                                                 <Link to={'news-detail/' + item.id} >{item.title}</Link>
//                                                 <span>{item.date_created}</span>
//                                             </p>
//                                         </div>
//
//                                         //     )}
//                                         // return null
//
//
//
//                                     ))}
//
//
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//
//
//                 </div>
//                 <Footer/>
//             </div>
//         );
//     }
// }
//
// export default SearchPage;










import React, {Component} from 'react';
import Navbar from "./Navbar";
import {Col, Container, Row} from "reactstrap";
import AboutNewsItem from "../container/AboutNewsItem";
import Search from "./Search";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import {API_PATH_MAIN} from "../tools/constants";
class SearchPage extends Component {
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

export default SearchPage;