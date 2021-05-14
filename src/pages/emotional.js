import React ,{Component} from 'react';
import Common from "./common";



var data= [
    {back:"card card-size margin-content bg-dark",
        description: 
        "May your troubles \
        be less and your \
        blessings be more"},
    {back:"card card-size margin-content bg-dark",description: "Loyalty is when\n love is stronger\n than passion"},
    {back:"card card-size margin-content bg-dark",description: "Every true and deep love\n is a sacrifice."},
    {back:"card card-size margin-content bg-dark",description: "Being deeply loved by someone\n gives you strength,\n while loving someone deeply gives you courage"},
    {back:"card card-size margin-content bg-dark",description: "You were my first my last.\nThere shall never be another you.\n You are a lifetime you are my life"},
    {back:"card card-size margin-content bg-dark",description: "Sometimes no matter\n how much you try to speak\n your heart out,\n words are not just enough to describe how you truly fee"},
    {back:"card card-size margin-content bg-dark",description: "I have learned now that while those who speak about one’s miseries usually hurt, those who keep silence hurt more"},
    {back:"card card-size margin-content bg-dark",description: "Life is too deep for words,\n so don’t try to describe it,\n just live it"},
    {back:"card card-size margin-content bg-dark",description: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about"},
    {back:"card card-size margin-content bg-dark",description: "Real loss only occurs\n when you lose something\n that you love more than yourself"},
    {back:"card card-size margin-content bg-dark",description: "Why did you bother smiling\n in front of my face\n when you were busy gossiping\n behind my back? I hate you"},
    {back:"card card-size margin-content bg-dark",description: "A friend on the face,\n a bully in disguise.\n I should have known from the start, not to let our friendship get to my heart"},
    {back:"card card-size margin-content bg-dark",description: "No matter how dark the moment,\n love and hope are always possible"},
    {back:"card card-size margin-content bg-dark",description: "Fear is the path to the dark side.\n Fear leads to anger.\n Anger leads to hate.\n Hate leads to suffering"},
    {back:"card card-size margin-content bg-dark",description: "Monsters are real,\n and ghosts are real too. \nThey live inside us, and sometimes, they win"},
    {back:"card card-size margin-content bg-dark",description: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before"},
    {back:"card card-size margin-content bg-dark",description: "You always pass\n failure on the way"},
    {back:"card card-size margin-content bg-dark",description: "You're off\n to great places,\n today is your day"},
];



class emotional extends Component {

    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="jumb-h1">Emotional Quotes</h1>
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

export default emotional;