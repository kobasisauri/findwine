import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import App from "./src";
import configureStore, { sagaMiddleware } from "./src/store/configureStore";
import rootSaga from "./src/store/saga/index";
import storeRegistry from "./src/store/storeRegistry";

function Root() {
  const store = configureStore();
  storeRegistry.register(store);

  sagaMiddleware.run(() => rootSaga());
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
