import React from "react";
import { connect } from "react-redux";

import "./index.scss";
import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>

      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005; {/* &#10005;  =>  it is a UTF-8 character code for =>  X */}
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart, removeItem, addItem })(
  CheckoutItem
);
