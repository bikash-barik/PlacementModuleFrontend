import { SIGN_UP, LOADING_END, LOADING_START } from "../actions";

export default function(state = { message: "", loading: false }, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case SIGN_UP:
      return { ...state, message: action.payload.data.message };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
