import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav_container">
      <div className="Nav_wrapper">
        <Link to="/" className="Nav_Logo_link">
          <img className="Nav_logo" src={Logo} alt="logo" />
        </Link>

        <div className="Nav_right">
          <ul className="Nav_right_lists">
            <li className="Nav_right_list1">Bus</li>
            <li className="Nav_right_list2">Train</li>
            <li className="Nav_right_list3">Flights</li>
            <li className="Nav_right_list4">Bookings</li>
            <li className="Nav_right_list5">Contact Us</li>
          </ul>
          <button className="Nav_right_login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
