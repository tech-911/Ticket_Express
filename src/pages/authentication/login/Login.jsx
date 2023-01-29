import React from "react";
import "./login.scss";
import hero from "../../../assets/png/loginImage.png";
import logintop from "../../../assets/png/loginTop.png";
import Logo from "../../../assets/png/Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login_wrapper">
      <img className="login_top" src={logintop} alt="" />
      <div
        onClick={() => {
          navigate("/");
        }}
        className="login_header"
      >
        <img src={Logo} alt="" />
      </div>
      <div className="login_form_container">
        <img className="login_hero" src={hero} alt="" />
        <div className="login_form_wrap">
          <div className="login_form_header">
            <h1 className="login_form_header_text1">Welcome.</h1>
            <div className="login_form_header_text2_wrap">
              <p className="login_form_header_text2_item1">
                Don’t have an account?
              </p>
              <p className="login_form_header_text2_item2">
                <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
          <form className="login_form">
            <div className="login_form_email">
              <label className="login_form_email_label" htmlFor="email">
                Email address
              </label>
              <input
                className="login_form_email_input"
                type="email"
                id="email"
              />
            </div>
            <div className="login_form_password">
              <label className="login_form_password_label" htmlFor="password">
                Password
              </label>
              <input
                className="login_form_password_input"
                type="password"
                id="password"
              />
            </div>
            <button className="login_button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
