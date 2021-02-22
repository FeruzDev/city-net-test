// import React, {Component} from 'react';
// import Ads from "./Ads";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
//
// class AdsItem extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             data:[
//
//                 {
//                     "userId": 1,
//                     "id": 1,
//                     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 2,
//                     "title": "qui est esse",
//                     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 3,
//                     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//                     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 4,
//                     "title": "eum et est occaecati",
//                     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 5,
//                     "title": "nesciunt quas odio",
//                     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 6,
//                     "title": "dolorem eum magni eos aperiam quia",
//                     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 7,
//                     "title": "magnam facilis autem",
//                     "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 8,
//                     "title": "dolorem dolore est ipsam",
//                     "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
//                 }
//
//             ]
//         }
//     }
//
//     componentDidMount() {
//         window.scrollTo(0, 0);
//     }
//
//
//     render() {
//         return (
//          <div>
//              <Navbar />
//              <div className="adsItem">
//                  <div className="aboutBackFon">
//                      <h2>Oбъявление</h2>
//                  </div>
//                  <div className="addList">
//
//                      {this.state.data.map((item)=>(
//
//
//                          <Ads title={item.title} body={item.body} id={item.id} ></Ads>
//                          )
//
//                      )}
//                  </div>
//              </div>
//              <Footer />
//          </div>
//         );
//     }
// }
//
// export default AdsItem;













import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Col, Row} from "reactstrap";

const AdsFullCon = (props) => {


    return (
        <div className="adsFullCon">


            <Card>
                <div>
                    <img src="/img/ipt.jpg" alt="News image cap"/>
                    <span className="date">
                                          <span className="day">7</span>
                                          <span className="month">Jan</span>
                                      </span>
                </div>
                <a className="newsTitleLink">{props.title}</a>
                <span style={{marginLeft: '2vw'}}>21.12.2020</span>
                <p className="newsTitleP">{props.body} <Link className="hvr-pop" to={'/main-provider/ads/' + props.id} >more... </Link></p>
                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>12</span>viewing</a>

            </Card>


            <div className="adsList">

                {/*<h6>{props.title} <Link to={'/posts/' + props.id}>more...</Link></h6>*/}



                {/*<Row>*/}
                {/*    <Col md={4}>*/}
                {/*        <div className="adsImg">*/}
                {/*            <img src="/img/ipt.jpg" alt=""/>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col md={8}>*/}
                {/*        <div className="adsTitle">*/}
                {/*            <h2>{props.title} </h2>*/}
                {/*            <span>21.12.2020</span>*/}
                {/*            <p>{props.body}</p>*/}
                {/*            <Link className="hvr-pop" to={'/main-provider/ads/' + props.id} >ЧИТАТЬ ДАЛЕЕ » </Link>*/}


                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Row>*/}


            </div>
        </div>
    );
};

export default AdsFullCon;