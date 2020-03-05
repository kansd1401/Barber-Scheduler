import React,{useState} from 'react';
import Scheduler from "./Scheduler"
import SidebarList from "./SidebarList"
import "./App.scss"

function App() {
  const [item, setItem] = useState("Book Appointment")

  return (
    <div className="App">
      <div className="sidebar">
        <img
          className="logo"
          src="images/logo3.svg"
          alt="Interview Scheduler"
        />
        <SidebarList setItem={setItem} item={item} items={["Book Appointment","About us", "Contact us"]}/>
      </div>
        {item === "Book Appointment" && <Scheduler/>}
    </div>
  );
}

export default App;
