import React from "react";
import "./sidenav.scss";
import logo from "../../assets/png/sidenavLogo.png";
import SideMenu from "../sideMenu/SideMenu";
import { Link, useNavigate } from "react-router-dom";
import { userSideData as data } from "../../pages/protected/user/userSideData";
import { MdOutlineLogout, MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actionCreators/login/loginAction";

const Sidenav = ({ side, setSide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(loginAction(null));
    navigate("/login");
  };
  return (
    <div className={`sidenav_wrapper ${side ? "sidenav_open" : ""}`}>
      <MdClose
        onClick={() => {
          setSide(0);
        }}
        className="sidenav_close_button"
      />
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="sidenav_options">
        {data.map(({ icon, name, link, id }) => {
          return <SideMenu key={id} icon={icon} name={name} link={link} />;
        })}
      </div>
      <div
        onClick={() => {
          handleLogout();
        }}
        className={`sidenav_logout ${side ? "sidenav_logout_set" : ""}`}
      >
        <MdOutlineLogout className="sidenav_logout_icon" />
        <p className="sidenav_logout_text">Log Out</p>
      </div>
    </div>
  );
};

export default Sidenav;
