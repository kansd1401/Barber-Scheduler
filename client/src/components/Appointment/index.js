import React from "react"
import Empty from "./empty"
import Header from "./header"
import Show from "./show"
import "./styles.scss"


export default function Appointment(props){
  return (
    <article className="appointment">
      <Header />
     {!props.name &&  <Empty onAdd={props.onAdd} />}
      {props.name && <Show 
      name={props.name}
      notes={props.notes}
      onEdit={props.onEdit}
      onDelete={props.onDelete}  />}
    </article>
  )
}