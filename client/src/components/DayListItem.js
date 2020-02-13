import React from "react";
import "./DayListItem.scss";
var classNames = require('classnames');


export default function DayListItem(props) {
  const classes = classNames("day-list__item", {
    "day-list__item--selected": props.selected
  });

  return (
    <th data-testid = "day" onClick={props.setDay} className={classes}>
      <h3 className="text--regular">{props.name}</h3> 
      <h3 className="text--light">{props.date}</h3>
    </th>
  );
}