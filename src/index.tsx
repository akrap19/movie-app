import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import setAuthorizationToken from "./redux/utils/setAuthorizationToken";
import rootReducer from "./redux/root-reducer";
import { setCurrentUser } from "./redux/login/login.actions";
import * as JWT from "jwt-decode";

let store = createStore(rootReducer, applyMiddleware(thunk));

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(JWT.default(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
