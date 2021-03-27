import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {API_PATH} from "../tools/constants"
import axios from "axios";
import AdsFullCon from "./AdsFullCon";
import {Col} from "reactstrap";
class RecBox extends Component {
    constructor() {
        super();

        this.state = {
            posts: [

            ]
        }
    }


    componentDidMount() {
        axios.get(API_PATH + "service-list")
            .then(res =>{

                this.setState({posts: res.data.results})

                console.log(res)
            })
            .catch(error => {
                console.log('error')
            })
    }

    render() {
        const {posts} = this.state

        return (
            <div className="RecCard">


                <div className="container">


                    <h1>Воспользуйтесь Нашими Услугами</h1>

                    <img className="backFon1" src="img/backFon.svg" alt=""/>

                    <img className="backFon2" src="img/backFon.svg" alt=""/>


                    {


                         posts.map((item)=>(


                             <Link  data-aos="flip-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000"  to={item.id==1 ?  'main-provider/tariff' : item.id==2 ? 'main-provider/view-ip-tv' : 'main-provider/view-ip-phone' } className="card">
                                 <div className="animCard">
                                     <div className="imgBox">
                                         <img src={item.img} alt=""/>
                                         <h2>{item.title}</h2>
                                     </div>
                                     <div className="content">

                                         <p dangerouslySetInnerHTML={{ __html: item.content }}/>
                                     </div>
                                 </div>
                             </Link>

                    ))
                    }






                    {/*<Link to='/main-provider/view-ip-tv'  className="card">*/}
                    {/*    <div className="animCard">*/}
                    {/*    <div className="imgBox">*/}
                    {/*        <img src="img/iptv2.jpg" alt=""/>*/}
                    {/*        <h2>IP TV</h2>*/}

                    {/*    </div>*/}
                    {/*    <div className="content">*/}
                    {/*        <p>Обратите внимание на тарифы телевидения по оптимальной цене.</p>*/}
                    {/*    </div>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}


                    {/*<Link to='/main-provider/view-ip-phone'  className="card">*/}
                    {/*    <div className="animCard">*/}
                    {/*    <div className="imgBox">*/}
                    {/*        <img src="img/ipt.jpg" alt=""/>*/}
                    {/*        <h2>IP телефония</h2>*/}

                    {/*    </div>*/}
                    {/*    <div className="content">*/}
                    {/*        <p>Звоните куда угодно и когда угодно с помощью технологии IP-АТС.</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*</Link>*/}
                </div>





            </div>
        );
    }
}

export default RecBox;