import React,{useState} from 'react';
import Scheduler from "./Scheduler"
import SidebarList from "./SidebarList"
import Contact from "./Contact"
import About from "./About"
import "./App.scss"

const items = ["BOOK NOW","ABOUT", "CONTACT"]

function App() {
  const [item, setItem] = useState(items[1])

  return (
    <div className="App">
      <div className="sidebar">
        <img
          className="logo"
          src="images/logo3.svg"
        />
        <SidebarList setItem={setItem} item={item} items={items}/>
      </div>
        {item === items[0] && <Scheduler/>}
        {item === items[1] && <About/>}
        {item === items[2] && <Contact/>}
      <div className="sidebar">
        <img
          className="banner"
          src="images/info.png"
        />
      </div>
    </div>
  );
}

export default App;
