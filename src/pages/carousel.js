import React,{Component} from "react";

import Carousel from 'react-bootstrap/Carousel';

import image1 from '../img/home1.webp';
import image11 from '../img/try.jpg';
import image111 from '../img/img111.jpg';

class carouse extends Component {
    render() {
        return(
            <div>
                <div className="jumbotron">
                <div className="container">
                    <h1 className="jumb-h1">Welcome</h1>
                    <h2 className="jumb-h2">May who enter as Guests leave us as Friends.</h2>
                </div>    
                </div>
                <div className="container">   
                    <Carousel className="margin-content">
                        <Carousel.Item interval={1000} className="carousel-size">
                            <img
                            className="img-fluid carousel-img"
                            src={image1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <p class="home-text-size">The way to get started<br></br> is to quit<br></br> talking and begin doing.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000} className="carousel-size">
                            <img
                            className="img-fluid carousel-img"
                            src={image11}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <p class="home-text-size">If life were predictable<br></br> it would cease to be life,<br></br> and be without flavor.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000} className="carousel-size">
                            <img
                            className="img-fluid carousel-img"
                            src={image111}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <p class="home-text-size">The future belongs<br></br> to those who believe<br></br> in the beauty of their dreams.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>    
            </div>    
        );
    }
}

export default carouse;