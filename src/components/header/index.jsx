import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export default props => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/aboutus">
        ABOUT US
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);
