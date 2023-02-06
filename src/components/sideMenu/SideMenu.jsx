import React from "react";
import "./sideMenu.scss";
import { Link } from "react-router-dom";
const SideMenu = ({ link, name, icon }) => {
  return (
    <Link to={link} className="sideop_link">
      <div className="sideop_icon">{icon}</div>
      <p className="sideop_name">{name}</p>
    </Link>
  );
};

export default SideMenu;
