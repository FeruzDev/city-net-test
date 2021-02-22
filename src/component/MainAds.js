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












import React, {Component} from 'react';
import AdsItem from "./AdsItem";
import axios from 'axios';

class MainAds extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({posts: res.data});
            })
    }


    render() {
        return (


            <div className="mainAds">

                <div className='container'>
                    <h1 className="ml-0" >Oбъявление</h1>
                    <div className="row">
                        {this.state.posts.slice(0, 1).map((item) => (

                            <AdsItem title={item.title} body={item.body} id={item.id}/>






                        ))}
                    </div>
                </div>

            </div>

        );


    }
}

export default MainAds;