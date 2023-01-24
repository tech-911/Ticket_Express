import React from "react";
import "./landing.scss";
import leftLanding from "../../assets/png/leftLanding.png";
import rightLanding from "../../assets/png/rightLanding.png";
import hero from "../../assets/png/Hero-Image.png";
import Nav from "../../components/nav/Nav";
const Landing = () => {
  return (
    <div className="landing_wrapper">
      <div className="landing_section1">
        <Nav />
        <img
          className="landing_leftLanding"
          src={leftLanding}
          alt="leftLandingImage"
        />
        <img
          className="landing_rightLanding"
          src={rightLanding}
          alt="rightLandingImage"
        />
        <img className="landing_hero" src={hero} alt="hero" />
        <div className="landing_hero_text_wrap">
          <p className="landing_hero_text1">Best all in one booking PLATFORM</p>
          <h1 className="landing_hero_text2">
            Ticket Xpress, your all in one booking ticket.
          </h1>
          <p className="landing_hero_text3">
            Our goal is to centralize tavel tech industry, and make ticket
            bookings to your preffered location easily accessible fro thr
            comfort of your home.
          </p>
          <button className="landing_hero_button">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
