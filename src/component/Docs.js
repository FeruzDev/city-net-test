import React, {Component} from 'react';

class Docs extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }



    render() {
        return (
            <div className="docs">
                <div className="aboutBackFon">
                    <h2>О Документы</h2>
                </div>


                <div className="docsItem">
                    <h1><span><img src="./img/icon/reuse.svg" alt=""/></span>Контракты</h1>
                    <div>
                        <h2>Контракт для личного пользования</h2>
                        <a href="#!"><span><img src="./img/icon/file.svg" alt=""/></span>договор_ООО_CITYNET_физ_лиц_10_08_2020__для_сайта.pdf</a>

                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Docs;