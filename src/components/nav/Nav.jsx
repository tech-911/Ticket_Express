import React from "react";
import "./nav.scss";
import Logo from "../../assets/png/Logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { loginAction } from "../../redux/actionCreators/login/loginAction";

const Nav = () => {
  const user = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [hamburger, setHamburger] = useState(0);
  const handleLogout = () => {
    store.dispatch(loginAction(null));
    // navigate("/login");
  };
 console.log(user)
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
          <li className="Nav_right_list1">
            <Link to="/comming">Bus</Link>
          </li>
          <li className="Nav_right_list2">
            <Link to="/comming">Train</Link>
          </li>
          <li className="Nav_right_list3">
            <Link to="/comming">Flights</Link>
          </li>
          <li className="Nav_right_list4">
            <Link to="/comming">Bookings</Link>
          </li>
          <li className="Nav_right_list5">
            <Link to="/comming">Contact Us</Link>
          </li>
        </ul>
        {Object.keys(user).length === 0 ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="Nav_right_login"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              handleLogout();
            }}
            className="Nav_right_login"
          >
            Logout
          </button>
        )}
      </div>
      <div className="Nav_wrapper">
        <Link to="/" className="Nav_Logo_link">
          <img className="Nav_logo" src={Logo} alt="logo" />
        </Link>

        <div className="Nav_right">
          <ul className="Nav_right_lists">
            <li className="Nav_right_list1">
              <Link to="/comming">Bus</Link>
            </li>
            <li className="Nav_right_list2">
              <Link to="/comming">Train</Link>
            </li>
            <li className="Nav_right_list3">
              <Link to="/comming">Flights</Link>
            </li>
            <li className="Nav_right_list4">
              <Link to="/comming">Bookings</Link>
            </li>
            <li className="Nav_right_list5">
              <Link to="/comming">Contact Us</Link>
            </li>
          </ul>
          {Object.keys(user).length === 0 ? (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="Nav_right_login"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                handleLogout();
              }}
              className="Nav_right_login"
            >
              Logout
            </button>
          )}
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
