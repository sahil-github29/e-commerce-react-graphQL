import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import RootReducer from "./rootReducer";

/* in this array we can add more middlewares */
const middleware = [logger];

export default createStore(RootReducer, applyMiddleware(...middleware));
