import './App.css';
import { Header } from './components/Header/Header';

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
    </div>
  );
}

export default App;
