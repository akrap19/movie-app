import React from "react";
import { Button } from "antd";

import "../../../asset/style/emptyMovieList.scss";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

function EmptyMovieList() {
  return (
    <div className="empty_movie_list_container">
      <div className="empty_movie_list_title_container">
        <span className="empty_movie_list_title">
          {"Your movie list is empty"}
        </span>
      </div>
      <div className="empty_movie_list_button_container">
        <Link to="/movieView">
          <Button>{"Create a new movie"}</Button>
        </Link>
      </div>
      <div className="empty_movie_list_img_container">
        <div className="empty_movie_list_img"></div>
      </div>
    </div>
  );
}

export default EmptyMovieList;
