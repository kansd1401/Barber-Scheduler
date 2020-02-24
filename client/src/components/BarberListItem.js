import React from "react";
import Appointment from "./Appointment"
import "./BarberListItem.scss";
var classNames = require('classnames');


export default function BarberListItem(props) {
  const classes = classNames("barbers__item");

  return (
    <div>
      <div className="box">
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
      </div>
      <React.Fragment>
       {props.appointments.map((appointment) => <Appointment 
       name={appointment.name}
       notes={appointment.notes} />)}
       <Appointment id="last"/>
      </React.Fragment>
    </div>
  );
}