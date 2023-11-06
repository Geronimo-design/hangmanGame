/** @format */
//A component to restart the game
const RestartButton = () => {
  // Reloads the page when the button is clicked to force the state of every component to reset
  return (
    <div>
      <button
        className='restartButton'
        onClick={() => {
          window.location.reload();
        }}>
        Restart Game
      </button>
    </div>
  );
};

export default RestartButton;
