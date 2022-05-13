import './App.css';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header
        title='Minesweeper'
        feature='flag'
        firstAction='alt'
        secondAction='click'
      />
    </div>
  );
}

export default App;
