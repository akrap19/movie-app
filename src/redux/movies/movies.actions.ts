import axios from "axios";
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./movies.types";

export function fetchMovies() {
  return (dispatch: any) => {
    dispatch(fetchMoviesRequest());
    axios
      .get("https://zm-job-application.herokuapp.com/movies", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then(function (response: any) {
        const movies = response.data;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch(function (response: any) {
        console.log(response);
      });
  };
};

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies: any) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};
