import React ,{Component} from 'react';
import Common from "./common";



var data= [
    {back:"card card-size margin-content bg-dark",
        description: 
        "May your troubles \
        be less and your \
        blessings be more"},
    {back:"card card-size margin-content bg-dark",description: "Take my hand,\n take my whole life too.\n For I can’t help falling in love with you"},
    {back:"card card-size margin-content bg-dark",description: "To the world you may be one person, but to one person you are the world."},
    {back:"card card-size margin-content bg-dark",description: "I’ve tried so many times to think of a new way to say it, and it’s still I love you"},
    {back:"card card-size margin-content bg-dark",description: "love you and that’s\n the beginning and end of everything"},
    {back:"card card-size margin-content bg-dark",description: "If you remember me,\n then I don’t care if\n everyone else forgets"},
    {back:"card card-size margin-content bg-dark",description: "True love is rare,\n and it’s the only thing that gives life real meaning"},
    {back:"card card-size margin-content bg-dark",description: "Love does not consist\n in gazing at each other,\n but in looking outward together in the same direction"},
    {back:"card card-size margin-content bg-dark",description: "When I look into your eyes,\n I know I have found the mirror of my soul"},
    {back:"card card-size margin-content bg-dark",description: "I love you” begins by I,\n but it ends up by you."},
    {back:"card card-size margin-content bg-dark",description: "Being deeply loved by someone\n gives you strength,\n while loving someone deeply gives you courage"},
    {back:"card card-size margin-content bg-dark",description: "The water shines\n only by the sun.\n And it is you who are my sun"},
    {back:"card card-size margin-content bg-dark",description: "Every time I see you,\n I fall in love all over again."},
    {back:"card card-size margin-content bg-dark",description: "A soul mate is someone who understands you like no other, loves you like no other, will be there for you forever, no matter what"},
    {back:"card card-size margin-content bg-dark",description: "Winning doesn't\n always mean being first"},
    {back:"card card-size margin-content bg-dark",description: "Do I love you? My god, if your love were a grain of sand, mine would be a universe of beaches"},
    {back:"card card-size margin-content bg-dark",description: "You always pass\n failure on the way"},
    {back:"card card-size margin-content bg-dark",description: "You're off\n to great places,\n today is your day"},
];



class love extends Component {

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="jumb-h1">Love Quotes</h1>
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

export default love;