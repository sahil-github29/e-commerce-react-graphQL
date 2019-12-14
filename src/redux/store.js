import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import RootReducer from "./rootReducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

/* in this array we can add more middlewares */
const middleware = [sagaMiddleware];

/* adding logger only on  development server */
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleware));

/* in the run function we can pass our sagas */
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
