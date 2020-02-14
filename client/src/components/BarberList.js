import React from "react";
import "./BarberList.scss";
import BarberListItem from "./BarberListItem"

export default function BarberList(props) {

  return (
    <ul>
      <section className="barbers">
        <h4 className="barbers__header text--light">Barbers</h4>
        <ul className="barbers__list">
          {props.barbers.map((person) => <BarberListItem
            firstName={person.firstName}
            lastName={person.lastName}
            avatar={person.avatar}
            id={person.id} />)}
        </ul>
      </section>
    </ul>
  );
}