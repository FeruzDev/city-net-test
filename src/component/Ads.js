//
//
//
//
// import React, {Component} from 'react';
// import axios from "axios";
// import {Col, Container, Row} from "reactstrap";
//
// class Ads extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             posts: []
//         }
//     }
//
//
//     componentDidMount() {
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//             .then((res) => {
//                 this.setState({posts: res.data});
//             })
//     }
//
//
//
//     render() {
//         return (
//             <div className="ads">
//                 <Container fluid={true}>
//                     <h1>Oбъявление</h1>
//                     {/*<div className="backBlueFon"></div>*/}
//                     <Row>
//                         <Col md={4}>
//
//                             <div className="adsImg">
//                                 <img src="./img/ipt.jpg" alt=""/>
//                             </div>
//                         </Col>
//                         <Col md={8}>
//                             <div className="adsTitle">
//                                 <h2>{this.state.posts.title}</h2>
//                                 <span>21.12.2020</span>
//                                 <p>{this.state.posts.body}</p>
//
//                                 <a href="#!" className="hvr-pop">ЧИТАТЬ ДАЛЕЕ »</a>
//                             </div>
//                         </Col>
//                     </Row>
//                     {this.state.posts.map((item) => (
//                         <div className="col-4">
//                             <PostItem title={item.title} id={item.id}/>
//                         </div>
//                     ))}
//                 </Container>
//             </div>
//         );
//     }
// }
//
// export default Ads;


//
//
//
//
// import React, {Component} from 'react';
// import AdsItem from "./AdsItem";
// import axios from 'axios';
// import Navbar from '../component/Navbar'
// import Footer from '../component/Footer'
// class Ads extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             posts: []
//         }
//     }
//
//
//     componentDidMount() {
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//             .then((res) => {
//                 this.setState({posts: res.data});
//             })
//     }
//
//
//     render() {
//         return (
//
//
//             <div>
//                 <Navbar></Navbar>
//                 <div className="aboutBackFon"><h2>Oбъявление</h2></div>
//                 <div className='container'>
//
//                 <div className="row">
//                     {this.state.posts.map((item) => (
//
//                             <AdsItem title={item.title} body={item.body} id={item.id}/>
//
//
//
//
//
//
//                     ))}
//                 </div>
//             </div>
//                 <Footer></Footer>
//             </div>
//
//         );
//
//
//     }
// }
//
// export default Ads;










import React, {Component} from 'react';
import AdsItem from "./AdsItem";
import axios from 'axios';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import {Link} from "react-router-dom";
import {Card, Col, Container, Row} from "reactstrap";
import AdsFullCon from "./AdsFullCon";

class Ads extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],

        }
    }


    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({posts: res.data});
                console.log(res)
            })
    }


    render() {
        return (


            <div className='aboutAds'>
                <Navbar></Navbar>


                <div className="aboutBackFon"><h2>Oбъявление</h2></div>

                <Container fluid={true}>
                    <Row>
                        <Col md={8}>


                            {this.state.posts.map((item)=>(



                                               <AdsFullCon title={item.title} body={item.body} id={item.id}/>

                                ))}


                        </Col>
                        <Col md={4}>
                            <div className="inputGroupM">
                                <div className="inputGroup">
                                    <input type="text" placeholder="Поиск..."/>
                                    <button><img src="/img/icon/loupe.svg" alt=""/></button>
                                </div>
                                <button className="searchBtn">ПОИСК</button>
                            </div>
                            <div className="category">
                                <h2>Категория</h2>
                                <div>
                                    <a href="#!">
                                        Интернет <span>(12)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#!">
                                        IP TV <span>(22)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#!">
                                        IP телефония <span>(12)</span>
                                    </a>
                                </div>
                            </div>
                            <div className="recentPost">
                                <h2>Недавний пост</h2>
                                <div>
                                    <img src="/img/ipt2.jpeg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/iptv2.jpg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/int.jpg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                                <div>
                                    <img src="/img/internet3.jpg" alt="News image cap"/>
                                    <p>
                                        <a href="#!">Lorem ipsum dolor.</a>
                                        <span>January 12, 2021</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Footer></Footer>
            </div>

        );


    }
}

export default Ads;