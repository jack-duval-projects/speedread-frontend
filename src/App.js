import logo from './logo.svg';
import './App.css';
import TextCycler from './TextCycler';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextCycler {wps=100} />
      </header>
    </div>
  );
}

export default App;
