import React from 'react';
import Scheduler from "./Scheduler"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img
          className="logo"
          src="images/logo3.svg"
          alt="Interview Scheduler"
        />
      </div>
        <Scheduler/>
    </div>
  );
}

export default App;
