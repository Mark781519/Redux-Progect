import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import configureStore from "./store/configureStore";

import { courseAdded, reactCoursesSelector } from "./store/courses";

const store = configureStore();
window.store = store;

store.dispatch(courseAdded({ title: "React" }));
store.dispatch(courseAdded({ title: "Angular" }));
store.dispatch(courseAdded({ title: "React advanced" }));

const x = reactCoursesSelector(store.getState());
const y = reactCoursesSelector(store.getState());

console.log(x === y);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
