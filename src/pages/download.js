import React,{Component} from 'react';
import DownloadLink from 'react-download-link';

import Common from "./downcommon";
import d1 from "../img/d1 (1).jpg";
import d2 from "../img/d1 (2).jpg";
import d3 from "../img/d1 (3).jpg";
import d4 from "../img/d1 (4).jpg";
import d5 from "../img/d1 (5).jpg";
import d6 from "../img/d1 (6).jpg";
import d7 from "../img/d1 (7).jpg";
import d8 from "../img/d1 (8).jpg";
import d9 from "../img/d1 (9).jpg";
import d10 from "../img/d1 (10).jpg";
import d11 from "../img/d1 (11).jpg";
import d12 from "../img/d1 (12).jpg";
import d13 from "../img/d1 (13).jpg";
import d14 from "../img/d1 (14).jpg";
import d15 from "../img/d1 (14).jpg";

var data  = [
    {img:d1},
    {img:d2},
    {img:d3},
    {img:d4},
    {img:d5},
    {img:d6},
    {img:d7},
    {img:d8},
    {img:d9},
    {img:d10},
    {img:d11},
    {img:d12},
    {img:d13},
    {img:d14},
    {img:d15},
]

class down extends Component {
    render(){
        return(
            <div>
                <div className="jumbotron">
                <h1 className="jumb-h1">Download Quotes</h1>
                </div>    
                <div className="row">
                    {data.map((data,index) =>{
                            return <Common {...data} key={index} />
                    })}
                </div> 
                
            </div>
        );
    }
}

export default down;