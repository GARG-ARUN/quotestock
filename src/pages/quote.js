import React,{Component} from 'react';
import Common from "./common";
import Navbar from "./data"

import image1jfif from '../img/1.jfif';
import image1 from '../img/img1.jpg';
import image11 from '../img/img11.jpg';
import image111 from '../img/img111.jpg';
import image2jfif from '../img/img2.jfif';
import jumboimg from '../img/jumboimg.jfif';
import image from '../img/home1.webp';
import { Link } from 'react-router-dom';

var data= [
    {back:"card card-size margin-content bg-dark",description: "Happiness... \nis when we realize. \nHow blessed we are for \nwhat we have."},
    {back:"card card-size margin-content bg-dark",description: "Life is either a daring adventure\n or nothing at all."},
    {back:"card card-size margin-content bg-dark",description: "Success is not final;\n failure is not fatal:\n It is the courage to continue that counts."},
    {back:"card card-size margin-content bg-dark",description: "The way to get started\n is to quit talking and begin doing."},
    {back:"card card-size margin-content bg-dark",description: "The secret of success\n is to do the common thing\n uncommonly well."},
    {back:"card card-size margin-content bg-dark",description: "The only limit\n to our realization\n of tomorrow will be\n our doubts of today."},
    {back:"card card-size margin-content bg-dark",description: "It is better\n to fail in originality\n than to succeed in imitation."},
    {back:"card card-size margin-content bg-dark",description: "A successful man\n is one who can lay \na firm foundation\n with the bricks others have thrown at him."},
    {back:"card card-size margin-content bg-dark",description: "Try not to become a man of success.\n Rather become a man of value."},
];


class Home extends Component {

    render() {
        return(
            <div>
                <div className="container margin-content">
                    <div className="card">
                        <img className="img-fluid" src={image11} />
                        <div className="card-img-overlay">
                            <div className="card-body">
                                <h1 className="card-body-h1-1">Quote of the Day</h1>
                                <pre className="card-body-pre">
                                    Meet me<br />
                                    where the end begins,<br />
                                    in echoes,<br />
                                    where your world is me,<br />
                                    and my world is you.
                                </pre> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container margin-content">
                    <div className="row">
                        <div className="col-6 col-md-4">
                            <div className="card form-margin">
                                <img className="img-fluid" src={image1} alt="" /> 
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                    <Link className="text-decoration" to="/quotestock/smile"><h1 className="card-body-h1">Smile Quotes</h1></Link>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="card form-margin">
                                <img className="img-fluid" src={image1} alt="" /> 
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                    <Link className="text-decoration" to="/quotestock/emotional"><h1 className="card-body-h1">Emotional Quotes</h1></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="card form-margin">
                                <img className="img-fluid" src={image1} alt="" /> 
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                    <Link className="text-decoration" to="/quotestock/inspirational"><h1 className="card-body-h1">Inspirational Quotes</h1></Link>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="card form-margin">
                                <img className="img-fluid" src={image1} alt="" /> 
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                    <Link className="text-decoration" to="/quotestock/positive"><h1 className="card-body-h1">Positive Quotes</h1></Link>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="card form-margin">
                                <img className="img-fluid" src={image1} alt="" /> 
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                    <Link className="text-decoration" to="/quotestock/life"><h1 className="card-body-h1">Life Quotes</h1></Link>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="card form-margin">
                                <img className="img-fluid" src={image1} alt="" /> 
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                    <Link className="text-decoration" to="/quotestock/love"><h1 className="card-body-h1">Love Quotes</h1></Link>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container margin-content">
                <hr></hr>
                </div>

                <div className="container">
                    <div className="margin-content">
                        <h1>Top Pics of the Day</h1>
                    </div>
                    <div className="row">
                        {data.map((data,index) =>{
                            return <Common {...data} key={index} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;