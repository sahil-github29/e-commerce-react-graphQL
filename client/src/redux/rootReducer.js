import { combineReducers } from "redux";

import user from "./user/user.reducer";
import cart from "./cart/cart.reducer";
import directory from "./directory/directory.reducer";
import shop from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";

/* This is equal to local storage */
import storage from "redux-persist/lib/storage";

/* persist storage configuration */
const persistConfig = {
  key: "root", //at what point inside our reducer object do we want to start storing everyting
  storage,
  whitelist: ["cart"] // what reducers to store in local storage
};

const rootReducer = combineReducers({
  user,
  cart,
  directory,
  shop
});

export default persistReducer(persistConfig, rootReducer);
