import React from "react";
import "./SidebarListItem.scss";
var classNames = require('classnames');


export default function SidebarListItem(props) {
  const classes = classNames("sidebar-list__item", {
    "sidebar-list__item--selected": props.selected
  });

  return (
    <th onClick={props.setItem} className={classes}>
      <h3 className="text--regular">{props.name}</h3> 
    </th>
  );
}