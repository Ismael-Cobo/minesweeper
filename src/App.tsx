import './App.css';
import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard';

function App() {

  return (
    <div className="App">
      <>
        <Header
          feature='flag'
          firstAction='alt'
          secondAction='click'
        >
          Minesweeper
        </Header>
        <br />
      </>
      <Scoreboard
        numberOfBoms='010'
        dificulty={['easy', 'medium', 'expert']}
        onReset={() => null}
        timer='000'
      />

    </div>
  );
}


export default App;