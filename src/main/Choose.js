import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Choose extends Component {

    render() {
        return (
            <div className='choose'>
                {/*<Link to='/main-product'>Shopping</Link>*/}
                {/*<Link to='/main-provider'>Provider</Link>*/}


                <div className="leftRightTitles">

                    <div className="leftS">
                        <h1>Lorem ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores cupiditate,
                            dolorum eligendi facilis harum iste minus modi necessitatibus, nobis obcaecati placeat quam
                            recusandae rem tempore velit voluptas voluptatibus?</p>

                        <Link to='/main-product'>
                             <span >Shopping</span>
                               <img src="img/icon/right-arrow.svg" alt=""/>
                        </Link>
                    </div>

                    <div className="rightS">
                        <h1>Lorem ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores cupiditate,
                            dolorum eligendi facilis harum iste minus modi necessitatibus, nobis obcaecati placeat quam
                            recusandae rem tempore velit voluptas voluptatibus?</p>
                       < Link to='/main-provider'>
                            <span>Provider</span>
                               <img src="img/icon/right-arrow.svg" alt=""/>
                       </Link>
                    </div>
                </div>
                <video src="img\Digital_Net.webm" loop muted
                       autoPlay>
                </video>

            </div>
        );
    }
}

export default Choose;