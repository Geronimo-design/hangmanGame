/** @format */
// Importing all necessary dependencies
import React, { useState } from 'react';
// A component to display the rules of the game
const Rules = () => {
  let [showRules, setShowRules] = useState(false);

  // A function to switch between displaying the rules and hiding them
  const toggleRules = () => {
    setShowRules(!showRules);
  };

  /* The main content of the component. It will be shown when the button is clicked, and hidden when the button is clicked again*/
  const RuleSheet = () => {
    return (
      <div>
        <h2>Game Rules</h2>
        <p>
          In order to progress, you must click on a specific key containing a
          letter that you think will be somewhere in the word that will prevent
          the man from being hanged.
        </p>

        <p>
          You need to ensure that the complete word is created to prevent the
          man from being hanged.
        </p>

        <p>
          Should you click on a letter on the keyboard that is not present in
          the word that will save the man, he will be one step closer to being
          hanged.
        </p>

        <p>
          Should you exhaust enough attempts at guessing the correct letters in
          the word, the man will be hanged and you lose the game. Should you
          guess enough letters in the word to be correct, such that the word is
          completed, the man will be saved and you win the game.
        </p>
      </div>
    );
  };
  // Returning a button that responds to user interaction. Clicking it will either hide or show the rules
  return (
    <div className='rulesContainer'>
      <button className='rulesButton' onClick={toggleRules}>
        {showRules ? <p>Dismiss Help</p> : <p>Request Help</p>}
      </button>
      {showRules ? <RuleSheet /> : null}
    </div>
  );
};

export default Rules;
