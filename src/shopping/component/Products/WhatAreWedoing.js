import React, {Component} from 'react';
import axios from "axios";
import NavbarShopping from "../NavbarShopping";
import ProductFooter from "../ProductFooter";


class WhatAreWedoing extends Component {

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
             <div className="whatAreWedoing">
                 <NavbarShopping></NavbarShopping>
                 <div className='container'>
                     <h2>Видеонаблюдение</h2>
                     <div className="row">



                         <div className="col-md-4">
                             <img src="/img/shoppingImg/camera1.png" alt="img"/>
                         </div>


                         <div className="col-md-8">
                             <p>Видеонаблюдение – это система, включающая в себя сочетание
                                 оборудования и программного обеспечения, предназначенного для
                                 визуального контроля за территорией, действиями и ситуацией. На
                                 сегодняшний день, это самая востребованная система для охранных и
                                 мониторинговых целей. Развитие систем видеонаблюдения позволяет
                                 открывать новые возможности не только для фиксации правонарушений, но и для их
                                 предотвращения.
                             </p>
                         </div>



                         <h4>Установив систему видеонаблюдения, Вы сможете:</h4>

                         <ul>
                             <li>Осуществлять мониторинг производственного процесса на каждом из его этапов;</li>
                             <li>Предотвращать нарушения техники безопасности, качества производства, условий труда;</li>
                             <li>Иметь полную и задокументированную информацию о несчастных случаях на производстве;</li>
                             <li>Предотвращать хищение и порчу произведенных товаров и продуктов, производственного
                                 имущества;</li>
                         </ul>

                     </div>

                 </div>

                 <ProductFooter></ProductFooter>
             </div>
            );
        }
    }

    export default WhatAreWedoing;