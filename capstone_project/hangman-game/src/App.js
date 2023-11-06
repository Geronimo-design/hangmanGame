/** @format */
// Importing all necessary dependencies
import './App.css';
import KeyBoard from './components/KeyBoard';
import Rules from './components/Rules';
// The main App component that contains all other components
function App() {
  return (
    <div className='App'>
      <h1>Hangman</h1>
      <Rules />
      <KeyBoard />
    </div>
  );
}

export default App;
