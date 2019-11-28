/* find() =>  returns the first item found in an array */

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    /* we are using map because it returns a new array */
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  /* adding item first time and again we are returing new array */
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
