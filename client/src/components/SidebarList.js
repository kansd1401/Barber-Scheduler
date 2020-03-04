import React from "react";
import SidebarListItem from "./SidebarListItem";


export default function DayList(props) {
  return (
    <ul className="sidebar-list">
      {props.items.map((item) => <SidebarListItem
        // key={item.id}
        name={item} 
        selected={item === props.item}
        setItem={() => props.setItem(item)}
        />)}
    </ul>
  );
}