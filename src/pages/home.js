import React,{Component} from 'react';
import Common from "./common";
import Carousel from "./carousel";

import Quote from "./quote";

import image1jfif from '../img/1.jfif';
import image1 from '../img/img1.jpg';
import image11 from '../img/img11.jpg';
import image111 from '../img/img111.jpg';
import image2jfif from '../img/img2.jfif';
import jumboimg from '../img/jumboimg.jfif';
import image from '../img/home1.webp';

var data= [
    {back:"card card-size margin-content bg-dark",description: "May you live\n all the days of your life."},
    {back:"card card-size margin-content bg-dark",description: "The greatest glory\n in living lies\n not in never falling, but in rising \nevery time we fall"},
    {back:"card card-size margin-content bg-dark",description: "Never let the fear\n of striking out\n keep you from playing the game"},
    {back:"card card-size margin-content bg-dark",description: "You will face\n many defeats in life,\n but never let yourself be defeated."},
    {back:"card card-size margin-content bg-dark",description: "Always remember\n that you are absolutely unique.\n Just like everyone else."},
    {back:"card card-size margin-content bg-dark",description: "Spread love everywhere you go.\n Let no one ever come to you\n without leaving happier"},
    {back:"card card-size margin-content bg-dark",description: "Whoever is happy \nwill make others happy too"},
    {back:"card card-size margin-content bg-dark",description: "It is during our darkest\n moments that we must\n focus to see the light."},
    {back:"card card-size margin-content bg-dark",description: "Always remember\n that you are absolutely unique.\n Just like everyone else."},
];


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            submit :function () {
                console.log("done");
                alert("Thanks for your Contacting us.We will report you shortly.");
            }
        }
    }
    
    render() {

        return(
        <div>   

            <Carousel />

            <div id="About" className="container margin-content">
                
                <div className="row form-margin">
                    <div className="card bg-light">
                        <div className="card-body description">
                            Quotes
                            Refresh your day with Beautiful Quotes.We are here for you to
                            provide best experience.You will Find all type of Quotes here.
                            We will take care of your choice and suggest the quotes as 
                            per your choice.
                        </div>
                    </div>
                </div>

                

                <div className="row">
                    {data.map((data,index) =>{
                            return <Common {...data} key={index} />
                        })}
                </div> 
            </div>
            


            <div className="container">
                <h1 id="conatact" className="margin-content abouttitle">Contact</h1>
                <div className="contact-form margin-content">
                    <div className="row">
                        <div className="form-margin col-auto col-md-4">
                            <label for="name" >Name :</label>
                            <input id="name" className="form-control design" type="text" placeholder="Enter your username" />
                        </div>
                        <div className="form-margin col-auto col-md-4">
                            <label for="email">Email address :</label>
                            <input type="email" className="form-control design" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-margin col-auto col-md-4">
                            <label for="contact">Contact no :</label>
                            <input type="text" className="form-control design" placeholder="Enter Your Conatct No " id="contact" />
                        </div>
                        <div className="form-margin col-auto col-md-8">
                            <label for="text">Comment :</label>
                            <textarea rows="4" cols="50" className="form-control" placeholder="Enter Your Text Here " id="text" ></textarea>
                        </div>
                    </div>  
                    <div className="row">  
                        <div className="form-margin col-auto col-md-4">
                            <input className="form-check-input" type="checkbox" name="remember" /> I agree.
                        </div>
                        <div className="form-margin col-auto col-md-4">
                        <button className="btn btn-secondary" onClick={() => {this.state.submit()}}>Submit</button>
                        </div>
                        
                    </div>    
                </div>
            </div>

            <footer>
                
            </footer>

        </div>
        );
    }
}

export default Home;