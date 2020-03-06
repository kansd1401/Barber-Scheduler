import React from "react";
import "./ServiceListItem.scss";
var classNames = require('classnames');


export default function ServiceListItem(props) {
  const classes = classNames("service-list__item", {
    "service-list__item--selected": props.selected
  });

  return (
    <th onClick={props.setService} className={classes}>
      <strong className="service-list__text">{props.name}</strong> 
    </th>
  );
}