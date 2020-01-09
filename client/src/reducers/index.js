import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import crime from "./crime";

export default combineReducers({ alert, auth, crime });
