import React,{useState} from 'react';  
import './Popup.scss'; 
import './Form.scss'
import BarberListItem from "./BarberListItem"
import Button from "./Button" 

export default function Popup (props) {  
  const [name, setName] = useState(props.name || "");
  const [error, setError] = useState("");
  return (  
    <div className='popup'> 
      <div className='popup_inner'>  
        <main className="appointment__card appointment__card--create" >
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input 
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        {/* <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} /> */}
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onClose}>Cancel</Button>
          <Button confirm data-testid="save" onClick={() =>  console.log("save")}>Save</Button>
        </section>
      </section>
    </main>
      </div>  
    </div>  
  );  
}