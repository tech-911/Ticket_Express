import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_heading">About ticket xpress</div>
      <div className="about_body_wrap">
        <h1 className="about_left_text">
          Cheap and Affordable Tickets for your Vehicle Transport
        </h1>
        <p className="about_right_text text-justify">
          We are an intra school transport booking agency with students
          dedicated to move from location to the other around the school. We
          want our customers to spend less time purchasing their travel tickets.
          Our mission is to save you time, and stress with our simple online
          booking platform
        </p>
      </div>
    </div>
  );
};

export default About;
