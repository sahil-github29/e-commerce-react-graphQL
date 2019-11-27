import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon">
    <ShoppingIcon
      className="shopping-icon"
      onClick={() => toggleCartHidden()}
    />
    <span className="item-count">0</span>
  </div>
);

export default connect(null, { toggleCartHidden })(CartIcon);
