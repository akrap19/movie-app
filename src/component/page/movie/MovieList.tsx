import React from "react";
import "../../../asset/style/movieList.scss";
import "antd/dist/antd.css";
import { Alert, Button } from "antd";
import { Link } from "react-router-dom";

interface IMovieListViewState {
  showSuccessMessage: boolean;
}

class MovieList extends React.Component {
  state: IMovieListViewState = {
    showSuccessMessage: false,
  };

  componentDidMount() {
    if (localStorage.getItem("isLogedIn") === "true") {
      this.setState({ showSuccessMessage: true });
      localStorage.removeItem("isLogedIn");
    } else if (localStorage.getItem("isLogedIn") === "false") {
      this.setState({ showSuccessMessage: false });
    }
  }

  render = () => {
    return (
      <div className="movie_list">
        {this.state.showSuccessMessage ? (
          <Alert
            className="login_success_alert"
            message="Uspješno ste se ulogirali"
            type="success"
          />
        ) : null}
        <div className="movie_list_container">
          <div className="movie_list_title">
            <p>Movies</p>
          </div>
          <div className="movie_list_section_title_container">
            <p>Cover image</p>
            <p>Title</p>
            <p>Publication year</p>
            <p>Options</p>
          </div>
          <div className="movie_list_movie_container">
            <div className="movie_img">
              <div>
                <img src={require("../../../asset/img/mov2.png")} alt="movie" />
              </div>
            </div>
            <div>
              <p className="movie_title"> Some Swedish indie movie</p>
            </div>
            <div className="movie_year">
              <p>2011</p>
            </div>
            <div>
              <div>
                <Link className="edit_movie" to="/movieView">
                  {"Edit"}
                </Link>
              </div>
              <br />
              <div className="delete_movie_container">
                <Link className="delete_movie" to="/movieView">
                  {"Delete"}
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="movie_list_create_button_container">
            <Link to="/movieView">
              <Button>{"Create a new movie"}</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
}

export default MovieList;
