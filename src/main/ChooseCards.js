import React, {Component} from 'react';

class ChooseCards extends Component {

    constructor() {
        super();
        this.state ={
            cards:   [
                {

                    "title": "  similique qui sunt",
                    "Ptitle": " accusamus beatae ad facilis cum similique qui sunt  beatae ad " +
                        "facilis  beatae ad facilis accusamus beatae ad facilis cum similique qui " +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        "beatae ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis beatae " +
                        "ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis" ,

                    "url": "/img/iptv2.jpg",

                },
                {

                    "title": "deserunt velit ipsam",
                    "Ptitle": " accusamus beatae ad facilis cum similique qui sunt  beatae ad " +
                        "facilis  beatae ad facilis accusamus beatae ad facilis cum similique qui " +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        "beatae ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis beatae " +
                        "ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis" ,


                    "url": "/img/55.jpg",

                },
                {

                    "title": " deserunt velit ipsam",
                    "Ptitle": " accusamus beatae ad facilis cum similique qui sunt  beatae ad " +
                        "facilis  beatae ad facilis accusamus beatae ad facilis cum similique qui " +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        "beatae ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis beatae " +
                        "ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis" ,

                    "url": "/img/internet3.jpg",

                },

                {


                    "title": " deserunt velit ipsam",
                    "Ptitle": " accusamus beatae ad facilis cum similique qui sunt  beatae ad " +
                        "facilis  beatae ad facilis accusamus beatae ad facilis cum similique qui " +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        "sunt  beatae ad facilis  beatae ad facilis accusamus beatae ad facilis cum" +
                        " similique qui sunt  beatae ad facilis  beatae ad facilis accusamus accusamus " +
                        "beatae ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis beatae " +
                        "ad facilis cum similique qui sunt  beatae ad facilis  beatae ad facilis" ,


                    "url": "/img/int.jpg",

                }
            ]
        }


    }




    render() {
        return (
            <div className="chooseCards">

                <h1 >Lorem ipsum dolor</h1>
                {this.state.cards.map((item, i)=>(

                    !(i % 2 )
                        ? <div key={i} className="container">
                            <div data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom">

                            <div className="row about-company mt-5">
                                <div className="col-md-5">
                                    <img src={item.url} alt=""  className="w-100"/>
                                </div>
                                <div className="col-md-7 align-self-center text-justify">
                                    <h3 className="mb-2">{item.title}</h3>
                                    <p>{item.Ptitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <div key={i} className="container">
                            <div data-aos="fade-up"
                                 data-aos-anchor-placement="bottom-bottom">
                            <div className="row">
                                <div className="col-md-7 align-self-center text-justify">
                                    <h3>{item.title}</h3>
                                    <p>{item.Ptitle}</p>

                                </div>

                            <div className="col-md-5">
                                <img src={item.url} alt="" class="w-100" />
                            </div>


                        </div>
                            </div>

                        </div>

                ))}


            </div>
        );
    }
}

export default ChooseCards;