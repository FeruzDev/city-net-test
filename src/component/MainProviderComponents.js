// import React, {Component} from 'react';
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Choose from "../main/Choose";
// import AboutCompany from "../container/AboutCompany";
// import AboutPrice from "../container/AboutPrice";
// import AboutNews from "../container/AboutNews";
// import AdsItem from "./AdsItem";
// import Contact from "./Contact";
// import Docs from "./Docs";
// import Products from "../shopping/component/Products/Products";
// import ShoppingRoute from "../shopping/component/ShoppingRoute";
// import Main from "./Main";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";
//
//
//
// class MainProviderComponents extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//
//                 <Switch>
//                     {/*<Choose></Choose>*/}
//
//                     {/*<Route exact path="/" component={Main} />*/}
//                     <Route exact path="/" component={Choose} />
//
//                     <Route exact path="/main-provider/:company" component={AboutCompany} />
//
//                     <Route exact path="/tariff" component={AboutPrice}/>
//
//
//                     <Route exact path="/news" component={AboutNews}/>
//                     <Route exact path="/ads" component={AdsItem}/>
//                     <Route exact path="/contact" component={Contact}/>
//                     <Route exact path="/docs" component={Docs} />
//                     <Route exact path="/products" component={Products} />
//                     <Route exact path="/main-product" component={ShoppingRoute} />
//                     <Route exact path="/main-provider" component={Main} />
//
//
//                     <Route exact path="/main-provider/:tariff" component={MainProviderComponents} />
//
//
//                 </Switch>
//                 <Footer></Footer>
//
//
//
//             </div>
//         );
//     }
// }
//
// export default MainProviderComponents;