import React from "react";
import Appointment from "./Appointment"
import "./BarberListItem.scss";
var classNames = require('classnames');


export default function BarberListItem(props) {

  return (
    <div className="box">
      <div className={"barbers__box"}>
        <ul className={"barbers__item"} >
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
       firstName={appointment.FirstName}
       lastName={appointment.LastName}
       slot={appointment.Slot}
       notes={appointment.Note}
       time={appointment.Time}
       onAdd={() => props.onAdd(props.id,appointment.Slot)} />)}
       <Appointment id="last"/>
      </React.Fragment>}
    </div>
  );
} 