import React from 'react';
import {Col, Row} from "reactstrap";

const Reccom = () => {
    return (
        <div className="Reccom">
                <Row>
                    <Col md={4}>
                        <img src="./img/shoppingImg/cloud.svg" alt=""/>
                        <h3>Cloud stroge</h3>
                    </Col>
                    <Col md={4}>
                        <img src="./img/shoppingImg/sound.svg" alt=""/>
                        <h3>Two-way audio</h3>
                    </Col>
                    <Col md={4}>
                        <img src="./img/shoppingImg/search.svg" alt=""/>
                        <h3>AI Motion detection</h3>
                    </Col>
                    <Col md={4}>
                        <img  src="./img/shoppingImg/face.svg" alt=""/>
                        <h3>Face recognition</h3>
                    </Col>
                    <Col md={4}>
                        <img  src="./img/shoppingImg/analytics.svg" alt=""/>
                        <h3>Real time remote monitoring</h3>
                    </Col>
                    <Col md={4}>
                        <img  src="./img/shoppingImg/night.svg" alt=""/>
                        <h3>Night vision support</h3>
                    </Col>
                </Row>
        </div>
    );
};

export default Reccom;