import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS } from "./movies.types";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default movieReducer;
