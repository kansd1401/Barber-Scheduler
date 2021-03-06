import React,{Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "../index.scss";
import Button from "../components/Button";
import DayListItem from "../components/DayListItem";
import DayList from "../components/DayList";
import BarberListItem from "../components/BarberListItem"
import BarberList from "../components/BarberList"
import Appointment from "../components/Appointment"
import Empty from "../components/Appointment/empty"
import Show from "../components/Appointment/show"



storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

  storiesOf("DayListItem", module) 
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="MON" date={25} />) 
  .add("Selected", () => <DayListItem name="MON" date={26} selected />) 
  .add("Full", () => <DayListItem name="MON" date={27} />)
  .add("Clickable", () => (
    <DayListItem name="TUE" setDay={action("setDay")} date={28} /> 
  ));

  const days = [
    {
      id: 1,
      name: "MON",
      date: 23
    },
    {
      id: 2,
      name: "TUE",
      date: 24
    },
    {
      id: 3,
      name: "WED",
      date: 25
    },
    {
      id: 4,
      name: "THU",
      date: 26
    },
    {
      id: 5,
      name: "FRI",
      date: 27
    },
    {
      id: 6,
      name: "SAT",
      date: 28
    },
    {
      id: 7,
      name: "SUN",
      date: 29
    }
  ];

  const appointments = [
    {
      id: 1,
      slot: 1
    },
    {
      id: 2,
      slot: 2,
      name: "Leeory",
      notes: "Coloring"
    },
    {
      id: 3,
      slot: 3,
      name: "Devin",
      notes: "Haircut and coloring"
    },
    {
      id: 4,
      slot: 4
    },
    {
      id: 6,
      slot: 6,
      name: "Taika",
      notes: "Haircut and shaving"
    },
    {
      id: 7,
      slot: 7,
      name: "Mac",
      notes: "Clean shave"
    }
  ]
  
  storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("MON", () => (
    <DayList days={days} day={"MON"} setDay={action("setDay")} />
  ))
  .add("TUE", () => (
    <DayList days={days} day={"TUE"} setDay={action("setDay")} />
  ));

  const barber = {
    id: 1,
    firstName: "Sylvia",
    lastName: "Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png"
  };
  
storiesOf("BarberListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <BarberListItem
      id={barber.id}
      firstName={barber.firstName}
      lastName={barber.lastName}
      avatar={barber.avatar}
      appointments={appointments}
    />
  ))

  const barbers = [
    { id: 1, firstName: "Sylvia",lastName: "Palmer", image: "https://i.imgur.com/LpaY82x.png",appointments },
    { id: 2, firstName: "Tori",lastName: "Malcolm", image: "https://i.imgur.com/Nmx0Qxo.png",appointments },
    { id: 3, firstName: "Mildred",lastName: "Nazir", image: "https://i.imgur.com/T2WwVfS.png",appointments },
    { id: 4, firstName: "Cohana",lastName: "Roy", image: "https://i.imgur.com/FK8V841.jpg",appointments },
    { id: 5, firstName: "Sven",lastName: "Jones", image: "https://i.imgur.com/twYrpay.jpg",appointments }
  ];
  
  storiesOf("BarberList", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
    })
    .add("Preselected", () => (
      <BarberList
        barbers={barbers}
      />
    ));
  const appointment = {
    name: "Pepe",
    notes: "Haircut and color"
  }
  storiesOf("Appointment", module)
    .addParameters({
      backgrounds: [{ name: "white", value: "#fff", default: true }]
    })
    .add("Appointment Empty", () => (
      <Fragment>
        <Appointment id={1} time="12pm" />
        <Appointment id="last" time="1pm" />
      </Fragment>
    ))
    .add("Appointment Booked", () => (
      <Fragment>
        <Appointment
          id={1}
          time="12pm"
          name="Pepe"
          notes="haircut and coloring"
          onEdit={()=> console.log("Edit")}
          onDelete={()=> console.log("Delete")}
        />
        <Appointment id="last" time="1pm" />
      </Fragment>
    ))
    .add("Empty", () => <Empty onAdd={action("onAdd")} />)
    .add("Show", () => (
      <Show time="1pm"
      name="Pepe"
      notes="haircut and coloring"
      onEdit={()=> console.log("Edit")}
      onDelete={()=> console.log("Delete")}/>
    ));

  
