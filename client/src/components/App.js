import React from 'react';
import axios from 'axios';
import DayList from './DayList'
import { func } from 'prop-types';

const days = [];

function daysData(day){
  var weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  for(let i=1;i<=7;i++){
    days.push({id: i,name: weekDays[day.getDay()], date: day.getDate()})
    day.setDate(day.getDate() + 1)
  }
}

function App() {
  let barbersForDay;
  let currentDay = "06-02-2020"
  let date = new Date('February 06, 2020 03:24:00')
  daysData(date)
  console.log(days)
  axios.get('http://localhost:8000/dayData',{
    params:{
      date: currentDay
    }
  })
    .then((response)=> {
      barbersForDay = response.data.barbers
    })
  return (
    <div className="App">
      <DayList days={days}/>
    </div>
  );
}

export default App;
