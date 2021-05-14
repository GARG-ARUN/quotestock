import React ,{Component} from 'react';
import Common from "./common";

var data= [
    {back:"card card-size margin-content bg-dark",description: "Nothing you wear \n is more important than your smile"},
    {back:"card card-size margin-content bg-dark",description: "When life gives\n you a hundred reasons to cry,\n show life that you have a thousand reasons to smile."},
    {back:"card card-size margin-content bg-dark",description: "Share your smile with the world.\n It’s a symbol of friendship and peace"},
    {back:"card card-size margin-content bg-dark",description: "Strong people are ones\n who can smile\n for others’ happiness"},
    {back:"card card-size margin-content bg-dark",description: "Always find opportunities\n to make someone smile,\n and to offer random acts \n of kindness in everyday life."},
    {back:"card card-size margin-content bg-dark",description: "Teeth aren’t pearly,\n until you smile"},
    {back:"card card-size margin-content bg-dark",description: "You shouldn’t never regret\n something that made you smile"},
    {back:"card card-size margin-content bg-dark",description: "Use your smile\n to change the world;\n don’t let the world change your smile"},
    {back:"card card-size margin-content bg-dark",description: "Smile, smile, smile\n at your mind as often as possible. \nYour smiling will considerably reduce your mind’s tearing tension"},
    {back:"card card-size margin-content bg-dark",description: "Smiling is definitely \n one of the best beauty remedies.\n If you have a good sense of humor and a good approach to life, that’s beautiful"},
    {back:"card card-size margin-content bg-dark",description: "A smile is happiness \n you’ll find right under your nose"},
    {back:"card card-size margin-content bg-dark",description: "I love those who can \n smile in trouble"},
    {back:"card card-size margin-content bg-dark",description: "If you’re reading this… \n Congratulations, you’re alive.\n If that’s not something to smile about, then I don’t know what is"},
    {back:"card card-size margin-content bg-dark",description: "The greatest self\n is a peaceful smile,\n that always sees the world smiling back"},
    {back:"card card-size margin-content bg-dark",description: "Don’t cry because it’s over,\n smile because it happened"},
];

class Smile extends Component {

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="jumb-h1">Smile Quotes</h1>
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

export default Smile;