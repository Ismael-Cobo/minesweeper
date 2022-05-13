import './App.css';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header
        name='minesweeper'
        feature='flag'
        firstAction='alt'
        secondAction='click'
      />
    </div>
  );
}

export default App;
