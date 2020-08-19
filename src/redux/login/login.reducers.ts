import { SET_CURRENT_USER } from "./login.types";
import isEmpty from "lodash/isEmpty";

const defaultState = {
  isAuthenticeted: false,
  user: {},
};

export default (state = defaultState, action: any = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default:
      return state;
  }
};
