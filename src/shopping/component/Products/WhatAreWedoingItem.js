import React from 'react';
import {Link} from 'react-router-dom';

const WhatAreWedoingItem = (props) => {
    return (
        <div  >

                <ul>
                    <li>
                     <Link to={'/main-product/products/WhatAreWedoing/' + props.id}> {props.title}</Link>
                    </li>
                </ul>

        </div>
    );
};

export default WhatAreWedoingItem;