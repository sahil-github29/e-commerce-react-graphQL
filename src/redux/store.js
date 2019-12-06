import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import RootReducer from "./rootReducer";

/* in this array we can add more middlewares */
const middleware = [];

/* adding logger only on  development server */
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default { store, persistor };
