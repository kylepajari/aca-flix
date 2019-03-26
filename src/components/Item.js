import React from "react";
import ListToggle from "./ListToggle";
import PropTypes from "prop-types";
/* eslint-disable no-console */

function Item(props) {
  console.log("item props", props);

  let name = "";
  const backDrop =
    "http://image.tmdb.org/t/p/original" + props.movie.backdrop_path;
  if (!props.movie.name) {
    name = props.movie.original_title;
  } else if (props.movie.title) {
    name = props.movie.title;
  } else {
    name = props.movie.name;
  }

  return (
    <div className="Item" style={{ backgroundImage: "url(" + backDrop + ")" }}>
      <div className="overlay">
        <div className="title">{name}</div>
        <div className="rating">{props.movie.vote_average} / 10</div>
        <div className="plot">{props.movie.overview}</div>
        <ListToggle movie={props.movie} />
      </div>
    </div>
  );
}

Item.propTypes = {
  movie: PropTypes.object
};
export default Item;
