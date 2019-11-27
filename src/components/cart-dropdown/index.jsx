import React from "react";
import "./index.scss";
import CustomButton from "../custom-button";

export default props => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
