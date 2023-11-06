/** @format */
// Importing all necessary dependencies
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RestartButton from './Restart';
import state1 from './hangmanDrawings/state1.GIF';
import state2 from './hangmanDrawings/state2.GIF';
import state3 from './hangmanDrawings/state3.GIF';
import state4 from './hangmanDrawings/state4.GIF';
import state5 from './hangmanDrawings/state5.GIF';
import state6 from './hangmanDrawings/state6.GIF';
import state7 from './hangmanDrawings/state7.GIF';
import state8 from './hangmanDrawings/state8.GIF';
import state9 from './hangmanDrawings/state9.GIF';
import state10 from './hangmanDrawings/state10.gif';
import state11 from './hangmanDrawings/state11.GIF';
// The word to be played against
const word = 'TRIBULATION';

// A component to display the main UI of the page
const AlphabetKeyboard = () => {
  // Setting the initial state of the value of the input field
  const [inputValue, setInputValue] = useState('');

  // Pushing all state images into an array for easy access
  const stages = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
    state10,
    state11,
  ];

  // Setting the initial state of the source of the image
  const [imageSrc, setImageSrc] = useState(stages[0]);

  /* A function that will update the state of both the value of the input field and the image source when an alphabet key is clicked*/
  const handleClick = (letter) => {
    let userInput = inputValue + letter;
    setInputValue(userInput);

    // Setting the current index of the imageSrc
    const currentIndex = stages.indexOf(imageSrc);
    // Stating that the next index must increment from the current index
    const nextIndex = currentIndex + 1;

    // Looping though the input value and word to check if their characters are the same
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== word[i]) {
        setImageSrc(stages[nextIndex]);
      }
    }

    // informs the user if they have won or lost the game
    if (userInput.length === word.length) {
      if (userInput === word) {
        alert('You win!');
      } else {
        alert('You lose!');
      }
    }
  };

  // A function to display the image
  const displayHangMan = () => {
    return (
      <div>
        <img src={imageSrc} alt='hangman' />
      </div>
    );
  };

  // Creating a string that contains the alphabet
  const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Parsing the alphabet string to an array
  const alphabetArray = alphabetString.split('');

  /* JSX code to return the main UI elements of the page. The alphabet keys are rendered with the map method and each key has an event handler*/
  return (
    <div className='inputContainer'>
      {displayHangMan()}
      <input type='text' value={inputValue} readOnly />
      <div className='keyboard'>
        {alphabetArray.map((letter, index) => (
          <Button
            className='alphabetButton'
            key={index}
            onClick={() => handleClick(letter)}>
            {letter}
          </Button>
        ))}
      </div>
      <RestartButton />
    </div>
  );
};

export default AlphabetKeyboard;
