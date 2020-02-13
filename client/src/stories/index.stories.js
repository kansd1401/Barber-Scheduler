import React,{Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "../index.scss";
import Button from "../components/Button";
import DayListItem from "../components/DayListItem";
import DayList from "../components/DayList";



storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
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
      date: 23,
    },
    {
      id: 2,
      name: "TUE",
      date: 24,
    },
    {
      id: 3,
      name: "WED",
      date: 25,
    },
    {
      id: 3,
      name: "THU",
      date: 26,
    },
    {
      id: 3,
      name: "FRI",
      date: 27,
    },
    {
      id: 3,
      name: "SAT",
      date: 28,
    },
  ];
  
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