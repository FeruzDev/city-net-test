import React from 'react';
import {Col, Container, Row} from "reactstrap";





import {Component} from 'react';
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../tools/constants";

class Reccom extends Component{


    constructor() {
        super();
        this.state ={
            posts : []
        }
    }


    componentDidMount() {


        axios.get(API_PATH_SELLOFFICE + "innovation-tech-list/")
            .then(res => {
                this.setState({posts: res.data.results})

            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <div className="Reccom">
                    <h2 className='text-center text-white'>Инновационная технология</h2>
                    <Container>
                        <Row>


                            {
                                this.state.posts.filter(item => item.position === "top").map((item) => (
                                    <Col md={4}>
                                        <img  src={item.img} alt=""/>
                                        <h3>{item.title}</h3>
                                    </Col>
                                ))
                            }


                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Reccom;

//
// const Reccom = () => {
//     return (
//         <div className="Reccom">
//             <h2 className='text-center text-white'>Инновационная технология</h2>
//         <Container>
//             <Row>
//
//
//
//                 <Col md={4}>
//                     <img  src="./img/shoppingImg/face.svg" alt=""/>
//                     <h3>Распознавание лица</h3>
//                 </Col>
//                 <Col md={4}>
//                     <img  src="./img/shoppingImg/analytics.svg" alt=""/>
//                     <h3>Удаленный мониторинг в реальном времени</h3>
//                 </Col>
//                 <Col md={4}>
//                     <img src="./img/shoppingImg/sound.svg" alt=""/>
//                     <h3>Двустороннее аудио</h3>
//                 </Col>
//             </Row>
//         </Container>
//         </div>
//     );
// };
//
// export default Reccom;