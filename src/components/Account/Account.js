import facebook from "./facebook.png";
import google from "./googlelogo.png";
import "./Account.css";
import React from "react";
import { Navbar } from "../Navbar/Navbar";

export function Account(props) {
  return (
    <div className="account">
      <Navbar className="acc-nav" />

      <div className="accountset">
        <div className="info-account">
          <div className="titles">
            <h3 className="welcome" style={{ margin: "5% 0% 0% 0%" }}>
              Welcome to <span className="orange">LoremName!</span>
            </h3>
            <p className="signorlog">Sign up or log in</p>
          </div>

          <div className="buttons1">
            <div className="login">
              <p>Log in</p>
            </div>
            <div className="login sign">
              <p>Sign up</p>
            </div>

            <p className="or">or</p>
            <div className="facebook  webcont">
              <img src={facebook} alt="facebook" className="facebookimg" />
              <p className="web">Continue with Facebook</p>
            </div>
            <div className=" google webcont">
              <img src={google} alt="google" className="googleimg" />
              <p className="web">Continue with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
