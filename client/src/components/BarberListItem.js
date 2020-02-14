import React from "react";
import "./BarberListItem.scss";
var classNames = require('classnames');


export default function BarberListItem(props) {
  const classes = classNames("barbers__item");

  return (
    <ul className={classes}>
      <img
        className={"barbers__item-image"}
        src={props.avatar}
        alt={props.firstName}
      />
      <div>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
      </div>
    </ul>
  );
}