import React from "react";
import "./Contact.scss"

export default function Contact(props) {

  return (
    <div className="contact">
      <img src="/images/image1.jpg"/>
      <div className="contact__info">
        <div className="contact__info--box">
          <h1>ADDRESS:</h1>
          <h2>1234 99th Ave Vancouver BC.</h2>
        </div>
        <div className="contact__info--box">
          <h1>TELEPHONE:</h1>
          <h2>204.010.0101</h2>
        </div>
        <div className="contact__info--box">
          <h1>EMAIL:</h1>
          <h2>barbershop@hmail.com</h2>
        </div>
      </div>
    </div>
  );  
}