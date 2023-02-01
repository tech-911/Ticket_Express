import React from "react";
import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import PageNotFound from "./pages/error/NotFound";
import CommingSoon from "./pages/error/construction";
import Signup from "./pages/authentication/signup/Signup";
import Login from "./pages/authentication/login/Login";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.login);
  console.log(user);
  return (
    <div className="app_wrapper">
      <Routes>
        {/* --------------external pages------------------ */}
        <Route path="/" element={<Landing />} />
        <Route path="/comming" element={<CommingSoon />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        {/* --------------internal pages (Proctected)---------------*/}
        {!user ? <Route path="/login" element={<Login />} /> : <Route></Route>}
      </Routes>
    </div>
  );
};

export default App;
