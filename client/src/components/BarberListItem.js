import React from "react";
import Appointment from "./Appointment"
import "./BarberListItem.scss";
var classNames = require('classnames');


export default function BarberListItem(props) {
  const classes = classNames("barbers__item");

  return (
    <div className="box">
      <div >
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
      {props.appointments &&
      <React.Fragment>
       {props.appointments.map((appointment) => <Appointment 
       id={appointment.ID}
       name={appointment.FirstName+appointment.LastName}
       slot={appointment.Slot}
       notes={appointment.Note}
       time={appointment.Time}
       onAdd={() => props.onAdd(props.id,appointment.Slot)} />)}
       <Appointment id="last"/>
      </React.Fragment>}
    </div>
  );
}