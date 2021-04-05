import React, {Component} from 'react';

import {  Link } from "react-router-dom";
import axios from "axios";
import {API_PATH, API_PATH_MAIN} from "../tools/constants";


class News extends Component {
    constructor() {
        super();

        this.state ={
            posts: [],
            serPosts: []
        }
    }



    componentDidMount() {
        axios.get(API_PATH_MAIN + "news-list/")
            .then(res => {

                this.setState({posts: res.data.results})

                console.log(res)
            })

        axios.get(API_PATH_MAIN + "service-list")
            .then(res2 =>{

                this.setState({serPosts: res2.data.results})

                console.log(res2)
            })
            .catch(error => {
                console.log('error')
            })

    }

    render() {
        return (
              <div className='news'>
                  <div className="container">

                  <h1 className="newsTitle">Последние новости из блога</h1>
                  <img className="newsBackLeft" src="img\backFon.svg" alt=""/>
                  <img className="newsBackRight" src="img\backFon.svg" alt=""/>


                      {
                          this.state.posts.slice(0,3).map((item)=>(

                              <main  data-aos="zoom-in"
                                     data-aos-easing="linear"
                                     data-aos-duration="1000" >
                                  <div className='normal'>

                                      <div className='module'>
                                          <div className='thumbnail'>
                                              <img src={item.img}/>

                                          </div>

                                          <div className='content'>
                                              <h1 className='title'>{item.title}</h1>

                                              {/*<h2>{item.date_created}</h2>*/}
                                              <h2>
                                                  | {this.state.serPosts.filter(item3 => item3.id === item.category)[0] && this.state.serPosts.filter(item3 => item3.id === item.category)[0].title}

                                              </h2>

                                              <h5></h5>

                                              <h6 className="pr-4" dangerouslySetInnerHTML={{ __html: item.content }}/>
                                              <div className="description">
                                                  <Link to={'/main-provider/news/news-detail/' + item.id}    >ЧИТАТЬ ДАЛЕЕ »</Link>
                                              </div>



                                          </div>
                                      </div>
                                  </div>
                              </main>
                          ))
                      }


              </div>
          </div>
        );
    }
}

export default News;