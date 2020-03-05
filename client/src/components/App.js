import React,{useState} from 'react';
import Scheduler from "./Scheduler"
import SidebarList from "./SidebarList"
import Contact from "./Contact"
import "./App.scss"

const items = ["Book Now","About Us", "Contact Us"]

function App() {
  const [item, setItem] = useState(items[1])

  return (
    <div className="App">
      <div className="sidebar">
        <img
          className="logo"
          src="images/logo3.svg"
          alt="Interview Scheduler"
        />
        <SidebarList setItem={setItem} item={item} items={items}/>
      </div>
        {item === items[0] && <Scheduler/>}
        {item === items[2] && <Contact/>}
        
    </div>
  );
}

export default App;
