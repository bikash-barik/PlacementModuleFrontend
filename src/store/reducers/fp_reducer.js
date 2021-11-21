import { FORGOT_PASSWORD, LOADING_END, LOADING_START } from "../actions";

export default function(state = { message: "", loading: false }, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case FORGOT_PASSWORD:
      return { ...state, message: action.payload.data.message };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
