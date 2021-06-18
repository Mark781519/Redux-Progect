import { combineReducers } from "@reduxjs/toolkit";
import entities from "./entities";
import apiStatus from "./apiStatus";

export default combineReducers({ entities, apiStatus });
