import React, {Component} from 'react';
import NavbarMain from "./Navbar";
import App from "./App";

class Home extends Component {
    render() {
        return (
            <div className="Home">


                <NavbarMain/>
                <App></App>


                <div className="animated-text">
                    <div className="line"><span>Скорост</span></div>
                    <div className="line"><span>Безопастность</span></div>
                    <div className="line"><span>Интеллектуальность</span></div>
                </div>
            </div>
        );
    }
}

export default Home;