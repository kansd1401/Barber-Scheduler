import React from "react"
import Empty from "./empty"
import Header from "./header"
import Show from "./show"
import "./styles.scss"


export default function Appointment(props){
  return (
    <article className="appointment">
      <Header time={props.time} />
      {!props.appointment && <Empty onAdd={() => console.log("clicked")} />}
      {props.appointment && <Show 
      name={props.appointment.name}
      notes={props.appointment.notes}
      onEdit={props.onEdit}
      onDelete={props.onDelete}  />}
    </article>
  )
}