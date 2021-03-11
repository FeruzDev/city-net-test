import React, {Component} from 'react';

import {  Link } from "react-router-dom";


class News extends Component {
    render() {
        return (
              <div className='news'>
                  <div className="container">

                  <h1 className="newsTitle">Последние новости из блога</h1>
                  <img className="newsBackLeft" src="img\backFon.svg" alt=""/>
                  <img className="newsBackRight" src="img\backFon.svg" alt=""/>
                  <main>
                      <div className='normal'>

                          <div className='module'>
                              <div className='thumbnail'>
                                  <img
                                      src="img/internet3.jpg"/>
                                  <div className='date'>
                                      <div>7</div>
                                      <div>Июл</div>
                                  </div>
                              </div>
                              <div className='content'>
                                  <h1 className='title'>Интернет</h1>

                                  <h2>Предлагаем только лучшее</h2>
                                  <h5>Lorem ipsum.</h5>
                                  <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam temporibus voluptatum?</h6>
                                  <div className="description">
                                      {/*<a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>*/}
                                      <Link to="/main-provider/news"   >ЧИТАТЬ ДАЛЕЕ »</Link>
                                  </div>



                              </div>
                          </div>
                      </div>
                  </main>
                  <main>
                      <div className='normal'>

                          <div className='module'>
                              <div className='thumbnail'>
                                  <img
                                      src="img/ipt2.jpeg"/>
                                  <div className='date'>
                                      <div>7</div>
                                      <div>Июл</div>
                                  </div>
                              </div>
                              <div className='content'>
                                  <h1 className='title'>IP телефония</h1>
                                  <h2>Никаких стереотипов</h2>
                                  <h5>Lorem ipsum.</h5>
                                  <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam temporibus voluptatum?</h6>
                                  <div className="description">
                                      {/*<a href="#!">ЧИТАТЬ ДАЛЕЕ »</a>*/}
                                      <Link to="/main-provider/news"   >ЧИТАТЬ ДАЛЕЕ »</Link>
                                  </div>


                              </div>
                          </div>
                      </div>
                  </main>

              </div>
          </div>
        );
    }
}

export default News;