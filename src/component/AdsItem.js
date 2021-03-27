import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from "reactstrap";

const AdsItem = (props) => {


    return (
        <div className="adsItem">


            <div className="adsList">

                        {/*<h6>{props.title} <Link to={'/posts/' + props.id}>more...</Link></h6>*/}



                        <Row>
                            <Col md={4}>
                                <div className="adsImg">
                                    <img src={props.img} alt=""/>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="adsTitle">
                                    <h2>{props.title} </h2>
                                    <span>21.12.2020</span>
                                    <p dangerouslySetInnerHTML={{ __html: props.content }}/>
                                    <Link className="hvr-pop" to={'/main-provider/ads/advertisement-detail/' + props.id} >ЧИТАТЬ ДАЛЕЕ » </Link>


                                </div>
                            </Col>
                        </Row>


            </div>
        </div>
    );
};

export default AdsItem;