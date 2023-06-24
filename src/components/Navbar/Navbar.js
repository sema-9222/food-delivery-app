import logo from "./Logo.png";
import user from "./User.png";
import cart from "./Shopping Cart.png";
import home from "./Home.png";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" style={{ width: "35px", margin: "15%" }} />
        <p>Name</p>
      </div>
      <div className="navbar-navs">
        <NavLink
          className="navlink"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
          to="/"
        >
          <p className="nav-p">HOME</p>
          <img src={home} alt="" className="nav-logo" />
        </NavLink>
        <NavLink
          className="active"
          style={{ color: "white", textDecoration: "none" }}
          to="/Menu"
        >
          <p className="nav-p">MENU</p>
        </NavLink>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
          to="/Cart"
          className="nav"
        >
          <p className="nav-p">CART</p>
          <img src={cart} alt="" className="nav-logo" />
        </NavLink>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
          to="/Account"
          className="nav"
        >
          <p className="nav-p">ACCOUNT</p>
          <img src={user} alt="" className="nav-logo" />
        </NavLink>
      </div>
    </div>
  );
}
