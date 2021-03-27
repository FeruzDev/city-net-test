


import React from 'react';
import {Link} from 'react-router-dom';

const AboutNewsItem = (props) => {


    return (
        <div className="adsFullCon">


            <Link className="card" to={'/main-provider/news/news-detail/' + props.id} >
                <div>
                    <img src={props.img} alt="News image cap"   />
                    {/*<span className="date">*/}
                    {/*                      <span className="day">7</span>*/}
                    {/*                      <span className="month">Jan</span>*/}
                    {/*                  </span>*/}
                </div>
                <a className="newsTitleLink">{props.title}</a>
                <span className='subDate'>{props.date_created}</span>

                {/*<span style={{marginLeft: '2vw'}}>21.12.2020</span>*/}
                <p className="newsTitleP" dangerouslySetInnerHTML={{ __html: props.body }} />
                {/*<Link className="hvr-pop  " to={'/main-provider/news/news-detail/' + props.id} >more... </Link>*/}
                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>{props.view}</span>viewing</a>

            </Link>



        </div>
    );
};

export default AboutNewsItem;