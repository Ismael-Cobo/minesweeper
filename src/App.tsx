import './App.css';
import { Header } from './components/Header/Header';
import { Level } from './components/Scoreboard/Level/Level';

function App() {

  return (
    <div className="App">
      <Header
        feature='flag'
        firstAction='alt'
        secondAction='click'
      >
        Minesweeper
      </Header>
      <Level children={['easy', 'medium', 'expert']} />
    </div>
  );
}

export default App;