import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import "semantic-ui-css/semantic.min.css";
import Home from "./component/Home";
import Nimadir from "./component/Nimadir";
import Company from "./component/Company";
import Price from "./component/Price";
import Client from "./component/Client";
import Footer from "./component/Footer";
import News from "./component/News";
import Partners from "./component/Partners";
import Ads from "./component/Ads";
import Navbar from "./component/Navbar";
import AboutCompany from "./container/AboutCompany";
import Counter from "./component/Counter";
import Contact from "./component/Contact";
import AboutPrice from "./container/AboutPrice";
import AboutNews from "./container/AboutNews";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./component/Main";


ReactDOM.render(
    <React.StrictMode>


        {/*<Responsive />*/}


        {/*<Main></Main>*/}
        {/*<Ads></Ads>*/}
        {/*<Nimadir></Nimadir>*/}
        {/*<Counter></Counter>*/}

        {/*<Company></Company>*/}

        {/*<Price></Price>*/}
        {/*<Client></Client>*/}
        {/*<News></News>*/}

        {/*<Partners></Partners>*/}


        {/*<AboutPrice></AboutPrice>*/}

        {/*<AboutNews></AboutNews>*/}

        {/*<Contact></Contact>*/}

        {/*<AboutCompany></AboutCompany>*/}
        {/*<Counter></Counter>*/}


        <Router>
            <Navbar/>
            <Home/>

            <Switch>


                {/*<Route path="/main" component={Home}/>*/}
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/company">
                    <AboutCompany/>
                </Route>
                <Route path="/price" component={AboutPrice}/>
                <Route path="/news" component={AboutNews}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>


        <Footer/>


    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

