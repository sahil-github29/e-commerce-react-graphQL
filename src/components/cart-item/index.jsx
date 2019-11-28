import React from "react";
import "./index.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="product" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
