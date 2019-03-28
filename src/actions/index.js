import axios from "axios";
/* eslint-disable no-console */

export const myMovieListLoaded = movies => {
  console.log("actions myMovieListLoaded running...", movies);
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
};

export const searchLoaded = movies => {
  console.log("actions searchLoaded running...", movies);

  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
};

export const loadMyMovieList = () => dispatch => {
  console.log("actions loadMyMovieList running...");
  axios
    .get("/movies")
    .then(res => dispatch(myMovieListLoaded(res.data)))
    .catch(error => console.log("loadMyMovieList error: ", error));
};

export const loadSearch = searchTerm => dispatch => {
  console.log("actions loadSearch...", searchTerm);

  return {
    type: "LOAD_SEARCH",
    value: axios
      .get(
        "https://api.themoviedb.org/3/search/multi?query=" +
          searchTerm +
          "&api_key=045c57acfd1b01a4b00a458466d70100"
      )
      .then(res => dispatch(searchLoaded(res.data.results)))
      .catch(error => console.log("loadSearch error: ", error))
  };
};

export const saveMyMovie = movie => dispatch => {
  console.log("actions saveMyMovie running...", movie);
  axios
    .post("/movies", movie)
    .then(res => dispatch(loadMyMovieList()))
    .catch(error => console.log("saveMyMovie  error: ", error));
};

export const removeMyMovie = id => dispatch => {
  console.log("actions removeMyMovie running...", id);
  axios
    .delete("/movies/" + id)
    .then(res => dispatch(loadMyMovieList()))
    .catch(error => console.log("removeMyMovie error: ", error));
};
