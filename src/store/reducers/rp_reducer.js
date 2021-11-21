import { RESET_PASSWORD, LOADING_END, LOADING_START } from "../actions";

export default function(state = { message: "", loading: false }, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case RESET_PASSWORD:
      if (action.payload.data === "Server Error. Something Broke!") {
        console.log(action.payload.data);
        return { ...state, message: action.payload.data };
      } else {
        console.log(action.payload.data.message);
        return { ...state, message: action.payload.data.message };
      }
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
