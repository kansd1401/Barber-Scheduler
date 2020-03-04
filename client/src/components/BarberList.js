import React from "react";
import "./BarberList.scss";
import BarberListItem from "./BarberListItem"

export default function BarberList(props) {

  return (
      <section className="barbers">
        <ul className="barbers__list">
          {props.barbers.map((person) => <BarberListItem
            firstName={person.FirstName}
            lastName={person.LastName}
            avatar={person.Image}
            id={person.ID}
            appointments={person.Appointments}
            onAdd ={props.onAdd} />)}
        </ul>
      </section>
  );
}