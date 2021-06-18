import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

function store() {
  return configureStore({ reducer });
}

export default store;
