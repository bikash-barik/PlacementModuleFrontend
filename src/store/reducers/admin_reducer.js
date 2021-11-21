import {
  ADMIN_SIGN_IN,
  GET_USER_LIST,
  GET_USER,
  APPROVE_USER,
  EMPLOYER_ADD,
  GET_EMPLOYER_LIST,
  GET_EMPLOYER
} from "../actions";

export default function(
  state = { token: localStorage.getItem("TOKEN"), disabled: false },
  action
) {
  switch (action.type) {
    case ADMIN_SIGN_IN:
      return {
        ...state,
        token: action.payload.data.token
      };
    case GET_USER_LIST:
      return { ...state, list: action.payload.data.userList };
    case GET_USER:
      return {
        ...state,
        user: action.payload.data.user,
        disabled: action.payload.data.user.isAdminVerified
      };
    case APPROVE_USER:
      return { ...state, message: action.payload.data.message };
    case EMPLOYER_ADD:
      return { ...state, message: action.payload.data.message };
    case GET_EMPLOYER_LIST:
      return { ...state, list: action.payload.data.companyList };
    case GET_EMPLOYER:
      return { ...state, employer: action.payload.data.employer };
    default:
      return state;
  }
}
