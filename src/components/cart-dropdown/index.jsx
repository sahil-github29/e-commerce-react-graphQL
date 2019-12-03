import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./index.scss";
import CartItem from "../cart-item";
import CustomButton from "../custom-button";
import { selectCartItems } from "../cart-icon/cart.selector";
import { toggleCartHidden } from "../cart-icon/actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

/* const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems }); */

// replaced the above code with "selectCartItems Selector"
const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropdown));
