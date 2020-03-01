import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  return (
    <ul className="day-list">
      {props.days.map((day) => <DayListItem
        key={day.id} 
        name={day.name} 
        date={day.date} 
        selected={day.name === props.day}
        setDay={() => props.setDay(day.name)}
        />)}
    </ul>
  );
}