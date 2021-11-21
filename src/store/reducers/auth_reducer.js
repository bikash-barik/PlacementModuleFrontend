import { SIGN_IN, LOADING_START, LOADING_END } from "../actions";

export default function(state = { message: "", loading: false }, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case SIGN_IN:
      return {
        ...state,
        message: action.payload.data.message,
        admin: action.payload.data.admin
      };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
