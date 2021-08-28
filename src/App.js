import './App.css';

function isDevEnvironment() {
  if (process.env.NODE_ENV === "development") {
    return "super amazing chage mode"
  } else {
    return "live production mode"
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>1:{process.env.REACT_APP_IS_DEV}</p>
        <p>2:{process.env.REACT_APP_DEFAULT_ENV_FILE}</p>
        <small>You are running this application in <b>{isDevEnvironment()}</b>!</small>
        <h1>React, running in a docker container, on heroku?</h1>
        <img src={process.env.REACT_APP_IMAGE_URL} alt='testing' width='500'></img>
      </header>
    </div>
  );
}

export default App;
