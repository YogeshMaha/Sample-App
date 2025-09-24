import logo from './logo.svg';
import './App.css';

function App() {
  
  const logApplicationLaunch = (message) => {
    console.log(message);
  };

  // Example usage of the logging function
  logApplicationLaunch('Application Launched1.');
  logApplicationLaunch('Application Launched2.');
  

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
