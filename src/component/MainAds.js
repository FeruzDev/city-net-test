
import React, {Component} from 'react';
import AdsItem from "./AdsItem";
import axios from 'axios';

class MainAds extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({posts: res.data});
            })
    }


    render() {
        return (


            <div className="mainAds">

                <div className='container'>
                    <h1 className="ml-0" >Oбъявление</h1>
                    <div className="row">
                        {this.state.posts.slice(0, 1).map((item) => (

                            <AdsItem title={item.title} body={item.body} id={item.id}/>






                        ))}
                    </div>
                </div>

            </div>

        );


    }
}

export default MainAds;