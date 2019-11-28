import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "./actions";
import { selectItemsCount } from "./cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon">
    <ShoppingIcon
      className="shopping-icon"
      onClick={() => toggleCartHidden()}
    />
    <span className="item-count">{itemCount}</span>
  </div>
);

/* const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
}); */

/* we replaced the above code with "selectItemsCount Selector" which uses memoization.
 it means if the props is not changed, this component willl not re-render 
*/
const mapStateToProps = state => ({
  itemCount: selectItemsCount(state)
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
