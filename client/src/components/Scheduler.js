import React,{useState, useEffect} from 'react';
import axios from 'axios';
import DayList from './DayList'
import BarberList from './BarberList'
import Popup from './Popup'
import TimeList from "./TimeList"
import "./Scheduler.scss"

const days = [];
const times = ["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"]
const services = ["CUT","SHAVE","BEARD TRIM", "CUT + SHAVE", "CUT + TRIM"]

function daysData(day){
  var weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  let d = new Date(day)
  for(let i=1;i<=7;i++){
    days.push({id: i,name: weekDays[d.getDay()], date: d.getDate(), fullDate: formatDate(d)})
    d.setDate(d.getDate() + 1)
  }
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('-');
}

// Needs to be switched to getting live date instead of fixed one when app goes live
let currentDay = new Date('2020-02-02T03:24:00')
daysData(currentDay)


export default function Scheduler(props) {
  const [day, setDay] = useState(days[0].name);
  const [barbers, setBarbers] = useState(0)
  const [add, setAdd] = useState(false);
  const [barber, setBarber] = useState(0)
  const [slot, setSlot] = useState(0)
  let date = days[days.findIndex((x)=> x.name == day)].fullDate

  function selectBarber(id, slot) {
    setBarber(barbers[barbers.findIndex((x)=> x.ID == id)])
    setSlot(slot)
    setAdd(true)
  }

  useEffect(() =>{
    axios.get('http://localhost:8000/dayData',{
    params:{
      date: date
    }
  })
    .then((response)=> {
      setBarbers(response.data.barbers)
    })
  },[day, add])
  return (
    <div className="scheduler">
      <DayList days={days} day={day} setDay={setDay}/>
      <div className="scheduler__container">
        <TimeList times={times}/>
        {barbers && <BarberList barbers={barbers} onAdd={selectBarber}/>}
      </div>
      {add && <Popup 
      onClose={() => setAdd(false)}
      barber={barber}
      slot={slot}
      times={times}
      date={date}
      services={services}
      />}
    </div>
  );
}