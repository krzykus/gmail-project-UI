import logo from './logo.svg';
import './App.css';
import GoogleLoginButton from './components/google/GoogleLoginButton';
const apiURL = "http://localhost:3001";


function Ping() {
  const pingPong = async () => {
    fetch(apiURL+"/ping")
      .then((response)=>response.text())
      .then((respStr)=>console.log(respStr))
  }
  return (
    <a href="#" onClick={pingPong}>Ping</a>
  )
}

function App() {
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
        <br />
        <Ping />
        <br />
        <GoogleLoginButton buttonText="Login with Google"></GoogleLoginButton>
      </header>
    </div>
  );
}

export default App;
