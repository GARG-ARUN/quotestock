import React ,{Component} from 'react';
import Common from "./common";


var data= [
    {back:"card card-size margin-content bg-dark",description: "Do what you can,\n with what you have,\n where you are."},
    {back:"card card-size margin-content bg-dark",description: "If you can dream it,\n you can do it"},
    {back:"card card-size margin-content bg-dark",description: "Trust yourself\n that you can do it and get it"},
    {back:"card card-size margin-content bg-dark",description: "It’s hard to beat a person\n who never gives up."},
    {back:"card card-size margin-content bg-dark",description: "When one door of happiness closes,\n another opens;\n but often we look so long at the closed door that we do not see the one which has been opened for us"},
    {back:"card card-size margin-content bg-dark",description: "Whatever you are\n, be a good one"},
    {back:"card card-size margin-content bg-dark",description: "Some people want it to happen,\n some wish it would happen,\n others make it happen."},
    {back:"card card-size margin-content bg-dark",description: "You can waste your lives\n drawing lines.\n Or you can live your life crossing them."},
    {back:"card card-size margin-content bg-dark",description: "Work hard in silence,\n let your success be the noise."},
    {back:"card card-size margin-content bg-dark",description: "Focus on being productive\n instead of busy"},
    {back:"card card-size margin-content bg-dark",description: "When someone says\n you can’t do it,\n do it twice and take pictures"},
    {back:"card card-size margin-content bg-dark",description: "The big lesson in life\n is never be scared of anyone or anything."},
    {back:"card card-size margin-content bg-dark",description: "Don’t compare yourself to others.\n Be like the sun and the moon\n and shine when it’s your time"},
    {back:"card card-size margin-content bg-dark",description: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is"},
    {back:"card card-size margin-content bg-dark",description: "The best revenge\n is massive success"},
    {back:"card card-size margin-content bg-dark",description: "It’s never too late\n for a new beginning\n in your life"},
    {back:"card card-size margin-content bg-dark",description: "Don’t give up,\n don’t take anything personally,\n and don’t take no for an answer"},
    {back:"card card-size margin-content bg-dark",description: "You can’t let your failures\n define you.\n You have to let your failures\n teach you"},
];

class Inspirational extends Component {

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="jumb-h1">Inspirational Quotes</h1>
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

export default Inspirational;