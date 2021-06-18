import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import generateId from "./middleware/generateId";
import func from "./middleware/func";

const middleware = [generateId, func];

function store() {
  return configureStore({ reducer, middleware });
}

export default store;
