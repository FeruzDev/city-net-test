import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import {  Link } from "react-router-dom";
import ProductSlide from "./ProductSlide";
import NavbarShopping from "../NavbarShopping";
import '../../../component/main.css'
import ProductFooter from "../ProductFooter";
import WhatAreWedoingItem from "./WhatAreWedoingItem";
import axios from "axios";
class Products extends Component {


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
                console.log(res);
            })
    }



    //
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }
    //





    render() {
        return (

            <div>
                <NavbarShopping></NavbarShopping>
                <div className="Products">
                    {/*<NavbarShopping></NavbarShopping>*/}

                    <ProductSlide></ProductSlide>
                    <Container fluid={true}>
                        <h2>Продукты</h2>
                        <Row>

                            <Col md={3}>
                                <div className="productsList">
                                      {this.state.posts.slice(0,10).map((item) => (

                              <WhatAreWedoingItem title={item.title} id={item.id}/>

                    ))}
                                </div>
                            </Col>
                            <Col md={9}>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-01.jpg" alt=""/>
                                    <span>
                                    Сетевые видеокамеры
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-16.jpg" alt=""/>
                                    <span>
                                    Аналоговые камеры
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-12.jpg" alt=""/>
                                    <span>
                                   Сетевые видеорегистраторы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-04.jpg" alt=""/>
                                    <span>
                                  Цифровые видеорегистраторы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\thermal.png" alt=""/>
                                    <span>
                                   Тепловизионное оборудование
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-15.jpg" alt=""/>
                                    <span>
                                    Видеостены и мониторы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-09.jpg" alt=""/>
                                    <span>
                                   Домофония
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-13.jpg" alt=""/>
                                    <span>
                                   Сетевое оборудование
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-85.jpg" alt=""/>
                                    <span>
                                   Кабели
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-86.jpg" alt=""/>
                                    <span>
                                   СКУД
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\guard.png" alt=""/>
                                    <span>
                                    Охранные системы
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-10.jpg" alt=""/>
                                    <span>
                                   Аксессуары
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\p-17.jpg" alt=""/>
                                    <span>
                                   VMS
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\special.png" alt=""/>
                                    <span>
                                   Специализированные решения
                                </span>
                                </div>

                                <div className="productCards">
                                    <img src="\img\shoppingImg\Product\storage.png" alt=""/>
                                    <span>
                                   Носители информации
                                </span>
                                </div>



                            </Col>
                        </Row>
                    </Container>

                </div>
                <ProductFooter></ProductFooter>
            </div>
        );
    }
}

export default Products;













//
// import React, {Component} from 'react';
//  import axios from 'axios';
// import WhatAreWedoingItem from "./WhatAreWedoingItem";
//
// class Products extends Component {
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
//             <div className='container'>
//                 <h5>Posts</h5>
//
//                 <div className="row">
//                     {this.state.posts.slice(0,10).map((item) => (
//                         <div className="col-4">
//                             <WhatAreWedoingItem title={item.title} id={item.id}/>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Products;