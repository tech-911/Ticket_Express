import React from "react";
import footer_design from "../../assets/png/footer_design.png";
import logo from "../../assets/png/Logo.png";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer_wrapper">
      <img className="footer_design" src={footer_design} alt="footer_desgin" />
      <div className="footer_container">
        <div className="footer_item_wrap">
          <div>
            <img src={logo} alt="logo" />
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="footer_copyright">All rights reserved@ticketxpress.com</p>
      </div>
    </div>
  );
};

export default Footer;
