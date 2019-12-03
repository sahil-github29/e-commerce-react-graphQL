import { createSelector } from "reselect";

/* Input Selector. It just a naming convention. we need it for createSelector */
const selectCart = state => state.cart;

/* Create Selector 
  It is a memoized selector
*/
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

/* Items count selector, 
Note: => we used input as above createSelector*/
export const selectItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
