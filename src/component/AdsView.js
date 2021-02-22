//
//
//
//
//
//
//
// import React, {Component} from 'react';
// import {Col, Container, Row} from "reactstrap";
// import axios from "axios";
//
// class Ads extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             post: {}
//         }
//     }
//
//
//     componentDidMount() {
//         console.log(this.props);
//         axios.get("http://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
//             .then(res => {
//                 this.setState({post: res.data});
//             })
//     }
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
//                                 <img src="/img/ipt.jpg" alt=""/>
//                             </div>
//                         </Col>
//                         <Col md={8}>
//                             <div className="adsTitle">
//                                 <h2>{this.state.post.title}</h2>
//                                 <span>21.12.2020</span>
//                                 <p>{this.state.post.body}</p>
//
//                                 <a href="#!" className="hvr-pop">ЧИТАТЬ ДАЛЕЕ »</a>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//
//
//
//             </div>
//         );
//     }
// }
//
// export default Ads;




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