import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore();
window.store = store;

store.dispatch((dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "courses/courseAdded",
      payload: { title: "My new Course" },
    });
  }, 3000);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
