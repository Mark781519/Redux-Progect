import { combineReducers } from "@reduxjs/toolkit";
import courses from "./courses";
import authors from "./authors";

export default combineReducers({ courses, authors });
