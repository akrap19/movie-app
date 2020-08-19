import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./page/login/Login";
import MovieList from "./page/movie/MovieList";
import EmptyMovieList from "./page/movie/EmptyMovieList";
import MovieView from "./page/movie/MovieView";

class App extends React.Component {
  unsubscribeFromAuth = null;

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem("jwt")?.length === undefined ? (
                <Redirect to="/login" />
              ) : (
                <MovieList />
              )
            }
          />
          <Route exact path="/emptyMovieList" component={EmptyMovieList} />
          <Route exact path="/movieView" component={MovieView} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
