import React from "react"
import Empty from "./empty"
import Header from "./header"
import "./styles.scss"


export default function Appointment(props){
  return (
    <article className="appointment">
      <Header time={props.time} />
      <Empty onAdd={() => console.log("clicked")} />
    </article>
    
  )
}