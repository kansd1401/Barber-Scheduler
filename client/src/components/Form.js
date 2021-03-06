import React,{useState} from 'react'; 
import axios from 'axios';
import Button from "./Button";
import ServiceList from "./ServiceList"


export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");


  function save(){
    if(firstName.length && lastName.length && email.length && service.length){
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
          url: 'http://localhost:8000/appointments/new',
          data: {
            UserID: response.data.user.ID,
            BarberID: props.barber.ID, 
            Slot: props.slot, 
            Date: props.date, 
            Note: service
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
    } else {
      setError("Please fill all the details and select a service.")
    }
  }

  return (
    <main className="form__card form__card--create" >
    <section className="form__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div>
            <ul className={"barber__item"} >
            <img
              className={"barber__item-image"}
              src={props.barber.Image}
              alt={props.barber.FirstName}
            />
            <div>
              <li>{props.barber.FirstName}</li>
              <li>{props.barber.LastName}</li>
            </div>
            <div>
              <li>Time:</li>
              <li>Date:</li>
            </div>
            <div>
              <li>{props.times[props.slot-1]} pm</li>
              <li>{props.date}</li>
            </div>
        </ul>
          </div>
          <section className="form__validation">{error}</section>
        <div className="barber__name">
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
        <div className="barber__name">
        <input 
            className="form__create-input text--semi-bold"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <ServiceList services={props.services} service={service} setService={setService}/>
      </form>
      <section className="form__actions">
        <Button confirm onClick={save}>Save</Button>
        <Button danger onClick={props.onClose}>Cancel</Button>
      </section>
    </section>
  </main>
  );
}