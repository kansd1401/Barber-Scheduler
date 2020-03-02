import React from "react"
import Empty from "./empty"
import Header from "./header"
import Show from "./show"
import "./styles.scss"


export default function Appointment(props){
  return (
    <article className="appointment">
      <Header />
     {!props.firstName &&  <Empty onAdd={props.onAdd} />}
      {props.firstName && <Show 
      name={props.firstName+" "+props.lastName}
      notes={props.notes}
      onEdit={props.onEdit}
      onDelete={props.onDelete}  />}
    </article>
  )
}