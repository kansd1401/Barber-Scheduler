import React from "react";
import "./TimeList.scss"

export default function TimeList(props) {

  return (
    <ul className="time-list">
      <div className="spacer"></div>
      {props.times.map((time) => <h4 className="time-list__slot">{time}</h4>)}
    </ul>
  );  
}