import './App.css';
import { Cell } from './components/Grid/Cell';
import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard';
import { Cell as CellType } from './helpers/Fiel';

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


      <Cell onClick={() => { }} coords={[1, 2]} onContextMenu={() => { }}>
        {8 as CellType}
      </Cell>

    </div>
  );
}


export default App;