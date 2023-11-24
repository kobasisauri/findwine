/* eslint-disable import/no-import-module-exports */
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { authReducer, menuReducer } from "./ducks";

export const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  authReducer,
  menu: menuReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./ducks", () => store.replaceReducer(rootReducer));
  }

  return store;
}
