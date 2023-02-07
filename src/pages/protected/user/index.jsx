import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./user.scss";
import Sidenav from "../../../components/sidenav/Sidenav";
import { GiHamburgerMenu } from "react-icons/gi";

const Index = () => {
  const [side, setSide] = useState(0);
  console.log(side);
  return (
    <div className="user_wrapper">
      <Sidenav side={side} setSide={setSide} />
      <div className={`user_outlet ${side ? "blur-sm" : ""}`}>
        <div className="user_nav">
          <GiHamburgerMenu
            onClick={() => {
              setSide(!side);
            }}
            className="user_hamburger"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
