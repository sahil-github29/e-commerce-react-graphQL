import { combineReducers } from "redux";

import user from "./user/user.reducer";
import cart from "../components/cart-icon/reducer";

export default combineReducers({
  user,
  cart
});
