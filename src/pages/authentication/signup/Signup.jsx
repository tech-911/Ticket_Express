import React from "react";
import "./signup.scss";
import hero from "../../../assets/png/loginImage.png";
import logintop from "../../../assets/png/loginTop.png";
import Logo from "../../../assets/png/Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup_wrapper">
      <img className="signup_top" src={logintop} alt="" />
      <div
        onClick={() => {
          navigate("/");
        }}
        className="signup_header"
      >
        <img src={Logo} alt="" />
      </div>
      <div className="signup_form_container">
        <img className="signup_hero" src={hero} alt="" />
        <div className="signup_form_wrap">
          <div className="signup_form_header">
            <h1 className="signup_form_header_text1">Get Started.</h1>
            <div className="signup_form_header_text2_wrap">
              <p className="signup_form_header_text2_item1">
                Already an account?
              </p>
              <p className="signup_form_header_text2_item2">
                <Link to="/login">Log in</Link>
              </p>
            </div>
          </div>
          <form className="signup_form">
            <div className="signup_form_name">
              <div className="signup_form_first_name">
                <label
                  className="signup_form_first_name_label"
                  htmlFor="firstname"
                >
                  First name
                </label>
                <input
                  className="signup_form_first_name_input"
                  type="text"
                  id="firstname"
                />
              </div>
              <div className="signup_form_last_name">
                <label
                  className="signup_form_last_name_label"
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  className="signup_form_last_name_input"
                  type="text"
                  id="lastname"
                />
              </div>
            </div>
            <div className="signup_form_email">
              <label className="signup_form_email_label" htmlFor="email">
                Email address
              </label>
              <input
                className="signup_form_email_input"
                type="email"
                id="email"
              />
            </div>
            <div className="signup_form_password">
              <label className="signup_form_password_label" htmlFor="password">
                Password
              </label>
              <input
                className="signup_form_password_input"
                type="password"
                id="password"
              />
            </div>
            <button className="signup_button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
