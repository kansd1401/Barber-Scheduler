import React from "react";
import TimeListItem from "./TimeListItem"

export default function TimeList(props) {

  return (
    <ul className="time-list">
      {props.times.map((time) => <TimeListItem
        time = {time}
        />)}
    </ul>
  );  
}