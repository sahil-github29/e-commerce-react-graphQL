import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

export default ({ currentUser }) => (
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

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signIn" className="option">
          SIGN IN
        </Link>
      )}
      {console.log(currentUser)}
    </div>
  </div>
);
