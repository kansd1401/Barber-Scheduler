import React,{useState} from 'react'; 
import axios from 'axios';
import BarberListItem from "./BarberListItem";
import Button from "./Button";


export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");


  function save(){
    axios({
      method: 'post',
      url: 'http://localhost:8000/users/new',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email
      }
    })
    .then(function (response) {
      axios({
        method: 'post',
        url: 'http://localhost:8000/forms/new',
        data: {
          UserID: response.data.user.ID,
          BarberID: props.barber.ID, 
          Slot: props.slot, 
          Date: props.date, 
          Note: note
        }
      })
      .then(function (res) {
        props.onClose();
      })
      .catch(function (err) {
        console.log(err);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  return (
    <main className="form__card form__card--create" >
    <section className="form__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <BarberListItem firstName={props.barber.FirstName}
          lastName={props.barber.LastName}
          avatar={props.barber.Image}
          id={props.barber.ID}/>
        <h2 className="text--regular">{props.times[props.slot-1]} pm</h2>
        <h2 className="text--regular">{props.date}</h2>
        <div>
          <input 
            className="form__create-input text--semi-bold"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
            <input 
            className="form__create-input text--semi-bold"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <input 
          className="form__create-input text--semi-bold"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          className="form__create-input text--semi-bold"
          name="email"
          type="text"
          placeholder="Notes for the appointment"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <section className="form__validation">{error}</section>
      </form>
    </section>
    <section className="form__card-right">
      <section className="form__actions">
        <Button danger onClick={props.onClose}>Cancel</Button>
        <Button confirm data-testid="save" onClick={save}>Save</Button>
      </section>
    </section>
  </main>
  );
}