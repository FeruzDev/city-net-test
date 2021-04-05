import React, {Component} from 'react';
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../../tools/constants";

class SmartRoomBanner extends Component {



    render() {

        return (
            <div className="smartRoomBanner">
              <div className="container">
                  <h1 data-aos="fade-up"   data-aos-duration="1500">Smart room</h1>

                  <img className="back" src="./img/bac.png" alt="" data-aos="fade-left"   data-aos-duration="1500"/>
                  <img className="front"  src="./img/sr.png" alt="" data-aos="fade-right"   data-aos-duration="1000"/>

                 <div className="row">
                     <div className="col-md-6" >
                         <h4>Smart room banner</h4>
                     </div>
                     <div className="col-md-6">
                         <div className="row">
                             <div className="col-md-6" data-aos="fade-up"   data-aos-duration="1500">
                                 <div className="box">
                                     <img src="./img/shoppingImg/pi2.png" alt=""/>
                                     <h3>Lorem ipsum.</h3>
                                 </div>
                             </div>
                             <div className="col-md-6" data-aos="fade-up"   data-aos-duration="1500">
                                 <div className="box">
                                     <img src="./img/shoppingImg/pi2.png" alt=""/>
                                     <h3>Lorem ipsum.</h3>
                                 </div>
                             </div>
                             <div className="col-md-6" data-aos="fade-up"   data-aos-duration="1500">
                                 <div className="box">
                                     <img src="./img/shoppingImg/pi2.png" alt=""/>
                                     <h3>Lorem ipsum.</h3>
                                 </div>
                             </div>
                             <div className="col-md-6" data-aos="fade-up"   data-aos-duration="1500">
                                 <div className="box">
                                     <img src="./img/shoppingImg/pi2.png" alt=""/>
                                     <h3>Lorem ipsum.</h3>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
              </div>
            </div>
    );
    }
    }

    export default SmartRoomBanner;