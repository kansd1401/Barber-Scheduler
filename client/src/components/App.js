import React from 'react';
import axios from 'axios';
import DayList from './DayList'
import { func } from 'prop-types';
const days = [];

function daysData(day){
  var weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  for(i=1;i<=7;i++){

  }
}

function App() {
  let barbersForDay;
  let currentDay = "06-02-2020"
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
