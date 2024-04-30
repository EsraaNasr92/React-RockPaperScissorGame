import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import React, { Component } from "react";

class Game extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playerVal : null,
            computerVal : null,
            playerScore: 0,
            compScore: 0,
        };
    }
    logic = (playerVal, computerVal)=>{
        if(playerVal == computerVal){
            return 0;
        } else if ((playerVal == "ROCK" && computerVal == "SCISSORS") ||
            (playerVal == "SCISSORS" && computerVal == "PAPER") ||
            (playerVal == "PAPER" && computerVal == "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    }
 
    decision = (playerChoice)=> {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = this.logic(playerChoice, compChoice)
        if(val == 1) {
            console.log("Hello")
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice, 
                playerScore : this.state.playerScore +1
            })
        } else if(val == -1) {
            console.log("Hello")
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice,
                compScore : this.state.compScore +1
            })
        } else {
            console.log("Hello")
            this.setState({
                computerVal : compChoice,
                playerVal : playerChoice
            })
        }
    }


    render(){
        const {playerVal, computerVal, playerScore, compScore} = this.state;
        return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Rock, Paper, Scissors Game</h1>
            <div className="flex justify-around mb-8">
            <button
                onClick={() => this.decision("ROCK")}
                className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-4"
            >
                <FaHandRock className="mr-2" />
                Rock
            </button>

            <button
                onClick={() => this.decision("PAPER")}
                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-4"
            >
                <FaHandPaper className="mr-2" />
                Paper
            </button>

            <button
                onClick={() => this.decision("SCISSORS")}
                className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
                <FaHandScissors className="mr-2" />
                Scissors
            </button>
            </div>

            <div className="flex flex-col items-center">
            <div className="mb-4">
                <p className="text-lg">
                Your choice: <span className="font-bold">{playerVal}</span>
                </p>
                <p className="text-lg">
                Computer choice: <span className="font-bold">{computerVal}</span>
                </p>
            </div>

            <div>
                <p className="text-lg">
                Your score: <span className="font-bold">{playerScore}</span>
                </p>
                <p className="text-lg">
                Computer score: <span className="font-bold">{compScore}</span>
                </p>
            </div>
            </div>
      </div>
        );
    }

}
export default Game;