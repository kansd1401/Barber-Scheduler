import React from "react";
import "./About.scss"

export default function About(props) {

  return (
    <div className="about">
      <img src="/images/image2.jpg"/>

      <div className="about__info">
        <div className="about__info--box">
          <h1>VIBE</h1>
        </div>
        <div className="about__info--box">
          <h2>With an old school flavor and a new school twist, Fort Worth Barber Shop specializes in classic cuts, beard trims, hot towel shaves and quality mens watch grooming products. Licensed professional barbers, a carefully curated music playlist and a chill place to kick back make for a one-of-a kind experience.</h2>
        </div>
        <div className="about__info--box">
          <button className="btn">BOOK NOW</button>
        </div>
      </div>
    </div>
  );  
}