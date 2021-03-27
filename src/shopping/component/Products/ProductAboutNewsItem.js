


import React from 'react';
import {Link} from 'react-router-dom';

const ProductAboutNewsItem = (props) => {


    return (
        <div className="adsFullCon">


            <Link className="card" to={'/main-product/news/news-detail/' + props.id} >
                <div>
                    <img src={props.img} alt="News image cap"   />

                </div>
                <a className="newsTitleLink">{props.title}</a>
                <span className='subDate'>{props.date_created}</span>

                {/*<span style={{marginLeft: '2vw'}}>21.12.2020</span>*/}
                <p className="newsTitleP" dangerouslySetInnerHTML={{ __html: props.body }}/>


                    {/*<Link className="hvr-pop" to={'/main-product/news/news-detail/' + props.id} >more... </Link>*/}




                <a href="#!" className="newsComments"><img src="/img/icon/eye.svg" alt=""/><span>{props.view}</span>viewing</a>

            </Link>



        </div>
    );
};

export default ProductAboutNewsItem;