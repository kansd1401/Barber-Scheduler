import React from "react";
import "./About.scss"

export default function About(props) {

  return (
    <div className="about">
      <div>
        
      </div>
      <div className="about__info">
        <div className="about__info--box">
          <h1>ADDRESS:</h1>
          <h2>1234 99th Ave Vancouver BC.</h2>
        </div>
        <div className="about__info--box">
          <h1>TELEPHONE:</h1>
          <h2>204.010.0101</h2>
        </div>
        <div className="about__info--box">
          <h1>EMAIL:</h1>
          <h2>barbershop@hmail.com</h2>
        </div>
      </div>
    </div>
  );  
}