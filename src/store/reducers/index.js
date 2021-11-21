import { combineReducers } from "redux";
import signupReducer from "./signup_reducer";
import authReducer from "./auth_reducer";
import fpReducer from "./fp_reducer";
import rpReducer from "./rp_reducer";
import userReducer from "./user_reducer";
import adminReducer from "./admin_reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: authReducer,
  forgot: fpReducer,
  reset: rpReducer,
  user: userReducer,
  admin: adminReducer
});

export default rootReducer;
