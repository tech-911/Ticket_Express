import React from "react";
import { Outlet } from "react-router-dom";
import "./user.scss";
import Sidenav from "../../../components/sidenav/Sidenav";

const Index = () => {
  return (
    <div className="user_wrapper">
      <Sidenav />
      <div className="user_outlet">
        <div className="user_nav"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
