import React ,{Component} from 'react';
import Common from "./common";


var data= [
    {back:"card card-size margin-content bg-dark",description: "Many of life’s failures\n are people who did not realize\n how close they were to\n success when they gave up"},
    {back:"card card-size margin-content bg-dark",description: "Not how long,\n but how well you have lived\n is the main thing"},
    {back:"card card-size margin-content bg-dark",description: "Life doesn’t require\n that we be the best,\n only that we try our best"},
    {back:"card card-size margin-content bg-dark",description: "There are no regrets\n in life,\n just lessons"},
    {back:"card card-size margin-content bg-dark",description: "Don’t be afraid to fail.\n It’s not the end of the world,\n and in many ways,\n it’s the first step toward learning\n something and getting better at it"},
    {back:"card card-size margin-content bg-dark",description: "You must\n not lose faith in humanity.\n Humanity is an ocean; \nif a few drops of the ocean are dirty,\n the ocean does not become dirt"},
    {back:"card card-size margin-content bg-dark",description: "The two most important days\n in your life are the day\n you are born and\n the day you find out why"},
    {back:"card card-size margin-content bg-dark",description: "Life is really simple,\n but men insist on\n making it complicated"},
    {back:"card card-size margin-content bg-dark",description: "The way I see it,\n if you want the rainbow,\n you gotta\n put up with the rain."},
    {back:"card card-size margin-content bg-dark",description: "Life is ten percent\n what happens to you\n and ninety percent\n how you respond to it"},
    {back:"card card-size margin-content bg-dark",description: "Life is\n a flower of which love\n is the honey"},
    {back:"card card-size margin-content bg-dark",description: "Life is\n about making an impact,\n not making an income."},
    {back:"card card-size margin-content bg-dark",description: "Life’s tragedy\n is that we get old too soon\n and wise too late."},
    {back:"card card-size margin-content bg-dark",description: "Live as if you were\n to die tomorrow. \nLearn as if you were to live forever"},
    {back:"card card-size margin-content bg-dark",description: "We should remember\n that just as a positive outlook \non life can promote good health,\n so can everyday\n acts of kindness"},
    {back:"card card-size margin-content bg-dark",description: "The best way to predict\n your future is to create it"},
    {back:"card card-size margin-content bg-dark",description: "Life is a dream for the wise,\n a game for the fool,\n a comedy for the rich,\n a tragedy for the poor"},
    {back:"card card-size margin-content bg-dark",description: "Be happy for this moment.\n This moment is your life"},
    {back:"card card-size margin-content bg-dark",description: "Happiness is like a butterfly;\n the more you chase it,\n the more it will elude you,\n but if you turn your attention to other things,\n it will come and sit softly on your shoulder."},
    {back:"card card-size margin-content bg-dark",description: "Nothing is more\n honorable than\n a grateful heart"},
];

class Life extends Component {

    render() {
        
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="jumb-h1">Life Quotes</h1>
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

export default Life;