import './App.css';
import inputAnalyzer from "./inputAnalyzer.js"
import preRenderer from "./preRenderer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { preRenderer.buildMatrix(inputAnalyzer.summandsArrays(231, 14)) }
      </header>
    </div>
  );
}

export default App;
