import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/Logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [hamburger, setHamburger] = useState(0);
  return (
    <div className="Nav_container">
      <div
        className={`Nav_mobile_menue ${!hamburger ? "Nav_mobile_close" : ""}`}
      >
        <GrClose
          className="Nav_mobile_menue_close_icon"
          onClick={() => {
            setHamburger(0);
          }}
        />
        <ul className="Nav_right_lists">
          <li className="Nav_right_list1">Bus</li>
          <li className="Nav_right_list2">Train</li>
          <li className="Nav_right_list3">Flights</li>
          <li className="Nav_right_list4">Bookings</li>
          <li className="Nav_right_list5">Contact Us</li>
        </ul>
        <button className="Nav_right_login">Login</button>
      </div>
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
        <GiHamburgerMenu
          onClick={() => {
            hamburger ? setHamburger(0) : setHamburger(1);
          }}
          className="nav_hamburger"
        />
      </div>
    </div>
  );
};

export default Nav;
