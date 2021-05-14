import React ,{Component} from 'react';
import Common from "./common";



var data= [
    {back:"card card-size margin-content bg-dark",
        description: 
        "May your troubles \
        be less and your \
        blessings be more"},
    {back:"card card-size margin-content bg-dark",description: "Choose to be optimistic,\n it feels better"},
    {back:"card card-size margin-content bg-dark",description: "Thousands of candles\n can be lighted from a single candle,\n and the life of the candle will not be shortened.\n Happiness never decreases by being shared"},
    {back:"card card-size margin-content bg-dark",description: "Train your mind\n to see\n the good in every situation"},
    {back:"card card-size margin-content bg-dark",description: "A truly happy person \n is one who can enjoy\n the scenery while on a detour."},
    {back:"card card-size margin-content bg-dark",description: "Success is\n the sum of small efforts\n repeated day in and day out"},
    {back:"card card-size margin-content bg-dark",description: "Hard work keeps\n the wrinkles\n out of the mind and spirit"},
    {back:"card card-size margin-content bg-dark",description: "Every day\n may not be good... but\n there’s something good in every day"},
    {back:"card card-size margin-content bg-dark",description: "If opportunity doesn’t knock,\n build a door"},
    {back:"card card-size margin-content bg-dark",description: "Positive anything is better than \n negative nothing"},
    {back:"card card-size margin-content bg-dark",description: "In every day,\n there are 1,440 minutes.\n That means we have 1,440 daily\n opportunities to make a positive impact"},
    {back:"card card-size margin-content bg-dark",description: "Once you replace\n negative thoughts with positive ones,\n you’ll start having positive results."},
    {back:"card card-size margin-content bg-dark",description: "It always seems\n impossible until it"},
    {back:"card card-size margin-content bg-dark",description: "You're braver than you believe,\n and stronger than you seem,\n and smarter than you think"},
    {back:"card card-size margin-content bg-dark",description: "Winning doesn't\n always mean being first"},
    {back:"card card-size margin-content bg-dark",description: "No one is perfect - \n that's why pencils have erasers"},
    {back:"card card-size margin-content bg-dark",description: "You always pass\n failure on the way"},
    {back:"card card-size margin-content bg-dark",description: "You're off\n to great places,\n today is your day"},
];



class Positive extends Component {

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="jumb-h1">Positive Quotes</h1>
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

export default Positive;