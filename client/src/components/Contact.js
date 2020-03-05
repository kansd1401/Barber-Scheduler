import React from "react";
import "./Contact.scss"

export default function Contact(props) {

  return (
    <div className="contact">
      <img src="/images/image1.jpg"/>
      <div className="contact__info">
        <div className="contact__info--box">
          <h1>ADDRESS:</h1>
          <h3>1234 99th Ave Vancouver BC.</h3>
        </div>
        <div className="contact__info--box">
          <h1>TELEPHONE</h1>
          <h3>204-010-0101</h3>
        </div>
        <div className="contact__info--box">
          <h1>EMAIL:</h1>
          <h3>barbershop@hmail.com</h3>
        </div>
      </div>
    </div>
  );  
}