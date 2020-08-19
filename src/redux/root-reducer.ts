import { combineReducers } from "redux";

import login from "./login/login.reducers";
import movieReducer from "./movies/movies.reducers";

export default combineReducers({
  login,
  movieReducer,
});
