import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import companyReducer from "./company";

export default combineReducers({
  auth,
  message,
  companyReducer,
});
