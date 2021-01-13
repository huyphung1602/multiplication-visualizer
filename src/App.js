import './App.css';
import inputAnalyzer from "./input_analyzer/inputAnalyzer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { inputAnalyzer(231, 14) }
      </header>
    </div>
  );
}

export default App;
