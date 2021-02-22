import React from 'react';

function Platform(props) {
    return (
        <div className="Platform">
            <h1>We are more than a sourcing platform</h1>
         <div className="platformItems">
             <div>
                 <img src="./img/shoppingImg/file2.svg" alt=""/>
                 <p>Packaging customization</p>
             </div>
             <div>
                 <img src="./img/shoppingImg/diamond.svg" alt=""/>
                 <p>Logo customization</p>
             </div>
             <div>
                 <img src="./img/shoppingImg/pencil.svg" alt=""/>
                 <p>Pattern and material customization</p>
             </div>
             <div>
                 <img src="./img/shoppingImg/demand.svg" alt=""/>
                 <p>instruction manual customization</p>
             </div>
             <div>
                 <img src="./img/shoppingImg/instructions.svg" alt=""/>
                 <p>App customization</p>
             </div>
         </div>
        </div>
    );
}

export default Platform;