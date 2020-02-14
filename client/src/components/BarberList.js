import React from "react";
import "./BarberList.scss";
import "./BarberListItem"

export default function BarberList(props) {
  BarberList.propTypes = {
    barber: PropTypes.number,
    setBarber: PropTypes.func.isRequired
  };

  return (
    <ul>
      <section className="barbers">
        <h4 className="barbers__header text--light">Barber</h4>
        <ul className="barbers__list">
          {props.barbers.map((person) => <BarberListItem 
            key={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            avatar={person.avatar}
            id={person.id}
            selected={props.barber === person.id}
            setBarber={() => props.setBarber(person.id)}  />)}
        </ul>
      </section>
    </ul>
  );
}