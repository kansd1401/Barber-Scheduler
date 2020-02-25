import React from 'react';
// import './App.css';
const axios = require('axios');

function App() {
  console.log("yooooooooooo")
  axios.get('http://localhost:8000/dayData',{ crossdomain: true })
    .then((response)=> {
      console.log(response)
    })
  return (
    <div className="App">
      <header className="App-header">
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
