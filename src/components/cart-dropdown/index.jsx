import React from "react";
import { connect } from "react-redux";

import "./index.scss";
import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { selectCartItems } from "../cart-icon/cart.selector";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

/* const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems }); */

// replaced the above code with "selectCartItems Selector"
const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
