import React from "react";
import Landing from "./pages/landing/Landing";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import PageNotFound from "./pages/error/NotFound";
import CommingSoon from "./pages/error/construction";
import Signup from "./pages/authentication/signup/Signup";
import Login from "./pages/authentication/login/Login";
import User from "./pages/protected/user/User";
import Admin from "./pages/protected/admin/Admin";
import Superadmin from "./pages/protected/superadmin/Superadmin";
import AuthorizationRoute from "./AuthorizationRoute";

const App = () => {
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
        <Route
          path="/user"
          element={
            <AuthorizationRoute role="user">
              <User />
            </AuthorizationRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AuthorizationRoute role="admin">
              <Admin />
            </AuthorizationRoute>
          }
        ></Route>
        <Route
          path="/superadmin"
          element={
            <AuthorizationRoute role="super_admin">
              <Superadmin />
            </AuthorizationRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
