import React from "react";
import ServiceListItem from "./ServiceListItem";


export default function ServiceList(props) {
  return (
    <ul className="service-list">
      {props.services.map((service) => <ServiceListItem
        name={service} 
        selected={service === props.service}
        setService={() => props.setService(service)}
        />)}
    </ul>
  );
}