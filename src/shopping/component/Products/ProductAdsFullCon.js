


import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Col, Row} from "reactstrap";

const ProductAdsFullCon = (props) => {


    return (
        <div className="adsFullCon">


            <Link className="card" to={'/main-product/ads/advertisement-detail/' + props.id} >
                <div>
                    <img src={props.img} alt="News image cap"   />
                    {/*<span className="date">*/}
                    {/*                      <span className="day">7</span>*/}
                    {/*                      <span className="month">Jan</span>*/}
                    {/*                  </span>*/}
                </div>
                <a className="newsTitleLink">{props.title}</a>
                {/*<span style={{marginLeft: '2vw'}}>21.12.2020</span>*/}
                <p className="newsTitleP"dangerouslySetInnerHTML={{ __html: props.body }}/>


                    {/*<Link className="hvr-pop" to={'/main-product/ads/advertisement-detail/' + props.id} >more... </Link>*/}
                <span className='subDate mb-5 '>{props.from_date}</span>

                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>{props.view}</span>viewing</a>

            </Link>


            <div className="adsList">

                {/*<h6>{props.title} <Link to={'/posts/' + props.id}>more...</Link></h6>*/}





            </div>
        </div>
    );
};

export default ProductAdsFullCon;