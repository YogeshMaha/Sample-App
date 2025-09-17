import logo from './logo.svg';
import './App.css';

function App() {
  const test1 = () => {
    console.log("launch the application1");
  }

  const test2 = () => {
    console.log("launch the application2");
  }

  const test3 = () => {
    console.log("launch the application3");
  }

  const test4 = () => {
    console.log("launch the application4");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
