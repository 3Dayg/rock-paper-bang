import React, { useState } from "react";
import { JsxFlags } from "typescript";

enum Actions {
 ROCK,
 PAPER,
 SCISSORS,
 LIZARD,
 SPOCK
}

const App = () => {

  const [yourChoice, setYourChoice] = useState<string>('NA');
  const [computerChoice, setComputerChoice] = useState<string>('NA');
  const [result, setResult] = useState<string>('NA');

  const handleChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tmpChoice = e.currentTarget.id;
    const tmpComputerChoice = Actions[Math.floor(Math.random() * 5)];

    setYourChoice(tmpChoice);
    setComputerChoice(tmpComputerChoice);

    if(tmpChoice === tmpComputerChoice){
      setResult('Tie');
      return;
    }
     
    //ROCK
    if(tmpChoice === Actions[0]){
      switch(tmpComputerChoice){
        case 'PAPER':
          setResult('You Lost');
          return;
        case 'SCISSORS':
          setResult('You Won');
          return;
        case 'LIZARD':
          setResult('You Won');
          return;
        case 'SPOCK':
          setResult('You Lost');
          return;
      } 
    }

    //PAPER
    if(tmpChoice === Actions[1]){
      switch(tmpComputerChoice){
        case 'ROCK':
          setResult('You Won');
          return;
        case 'SCISSORS':
          setResult('You Lost');
          return;
        case 'LIZARD':
          setResult('You Lost');
          return;
        case 'SPOCK':
          setResult('You Won');
          return;
      } 
    }

    //SCISSORS
    if(tmpChoice === Actions[2]){
      switch(tmpComputerChoice){
        case 'ROCK':
          setResult('You Lost');
          return;
        case 'PAPER':
          setResult('You Won');
          return;
        case 'LIZARD':
          setResult('You Won');
          return;
        case 'SPOCK':
          setResult('You Lost');
          return;
      } 
    }

    //LIZARD
    if(tmpChoice === Actions[2]){
      switch(tmpComputerChoice){
        case 'ROCK':
          setResult('You Lost');
          return;
        case 'PAPER':
          setResult('You Won');
          return;
        case 'SCISSORS':
          setResult('You Lost');
          return;
        case 'SPOCK':
          setResult('You Won');
          return;
      } 
    }

    //SPOCK
    if(tmpChoice === Actions[2]){
      switch(tmpComputerChoice){
        case 'ROCK':
          setResult('You Won');
          return;
        case 'PAPER':
          setResult('You Lost');
          return;
        case 'LIZARD':
          setResult('You Lost');
          return;
        case 'SCISSORS':
          setResult('You Won');
          return;
      } 
    }
  }

  return (
    <div className="App">
      <h1>Rock-paper-bang</h1>
      <h3>Computer choice: 
        <span>
          {computerChoice}
        </span>
      </h3>
      <h3>Your choice: 
        <span>
          {yourChoice}
        </span>
      </h3>
      <h3>Result: 
        <span>
          {result}
        </span>
      </h3>
      <button id='ROCK' onClick={handleChoice}>Rock</button>
      <button id='PAPER' onClick={handleChoice}>Paper</button>
      <button id='SCISSORS' onClick={handleChoice}>Scissors</button>
    </div>
  );
}

export default App;
