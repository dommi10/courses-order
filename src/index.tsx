import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./store";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import { userLoginSuccess } from "./store/actions";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
if (localStorage.token) {
  const user = {
    token: localStorage.token,
  };
  setAuthorizationHeader(localStorage.token);
  store.dispatch(userLoginSuccess(user));
}

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
