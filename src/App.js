import logo from './logo.svg';
import './App.css';

function App() {
  
  const test1 = () => {
    console.log('Application Launched1.');
  }

  const test2 = () => {
    console.log('Application Launched2.');
  }

  const test3 = () => {
    console.log('Application Launched2.');
  }

  const test5 = () => {
    console.log('Application Launched2.');
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
