import React from 'react';
import Scheduler from "./Scheduler"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
      </div>
        <Scheduler/>
    </div>
  );
}

export default App;
