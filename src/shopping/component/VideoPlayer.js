import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import axios from "axios";
import {API_PATH_SELLOFFICE} from "../../tools/constants";


class VideoPlayer extends Component {
    constructor() {
        super();
        this.state ={
            post: {}
        }
    }


    componentDidMount() {
        axios.get(API_PATH_SELLOFFICE + "video-add-list/")
            .then(res =>{
                this.setState({post: res.data.results})
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return (

           <div className="mainvideoPlayer">
               <h3  >{this.state.post[0] ? this.state.post[0].title : ""}</h3>
               <div className="videoPlayer  mt-5" >
                   <ReactPlayer  playing={true} muted={true}    className='h-80  '   url={this.state.post[0] ? this.state.post[0].video : ""} />
               </div>
           </div>
        );
    }
}

export default VideoPlayer;