import React from "react";
import "./DayListItem.scss";
var classNames = require('classnames');


export default function TimeListItem(props) {

  return (
    <header className="appointment__time">
       <h4 className="text--semi-bold">{props.time}</h4>
    </header>
  );
}