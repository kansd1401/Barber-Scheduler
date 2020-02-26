import React,{useState} from 'react';
import axios from 'axios';
import DayList from './DayList'
import { func } from 'prop-types';

const days = [];

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

let barbersForDay;
// Needs to be switched to getting live date instead of fixed one when app goes live
const currentDay = new Date('2020-02-06T03:24:00')
daysData(currentDay)
axios.get('http://localhost:8000/dayData',{
  params:{
    date: formatDate(currentDay)
  }
})
  .then((response)=> {
    barbersForDay = response.data.barbers
  })

function App() {
  
  const [day, setDay] = useState(days[0].name);
  return (
    <div className="App">
      <DayList days={days} day={day} setDay={setDay}/>
    </div>
  );
}

export default App;
