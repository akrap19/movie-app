import axios from "axios";
import setAuthorizationToken from "./../utils/setAuthorizationToken";
import { SET_CURRENT_USER } from "./login.types";
import jwtDecode from "jwt-decode";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../root-reducer";
import thunk from "redux-thunk";

export function setCurrentUser(user: any) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function login(identifier: string, password: string) {
  return axios({
    method: "post",
    url: "https://zm-job-application.herokuapp.com/auth/local",
    data: {
      identifier: identifier,
      password: password,
    },
  }).then(function (response: any) {
    const token = response.data.jwt;
    localStorage.setItem("jwt", token);
    setAuthorizationToken(token);
    let store = createStore(rootReducer, applyMiddleware(thunk));
    store.dispatch(setCurrentUser(jwtDecode(token)));
    const createHistory = require("history").createBrowserHistory;
    let history = createHistory();
    localStorage.setItem("isLogedIn", "true");
    history.push("/");
    window.location.reload();
  });
}
