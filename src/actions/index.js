import axios from "axios";
/* eslint-disable no-console */
export const loadMyMovieList = () => dispatch => {
  axios
    .get("/movies")
    .then(res => dispatch(myMovieListLoaded(res.data)))
    .catch(function(error) {
      // handle error
      console.log("loadMyMovieList error: ", error);
    });
};

export const myMovieListLoaded = movies => {
  console.log("myMovieListLoaded running...", movies);
  return {
    type: "MY_MOVIE_LIST_LOADED",
    data: movies
  };
};

export const loadSearch = searchTerm => dispatch => {
  console.log("term", searchTerm);

  return {
    type: "LOAD_SEARCH",
    data: axios
      .get(
        "https://api.themoviedb.org/3/search/multi?query=" +
          searchTerm +
          "&api_key=045c57acfd1b01a4b00a458466d70100"
      )
      .then(res => dispatch(searchLoaded(res.data.results)))
      .catch(function(error) {
        // handle error
        console.log("loadSearch error: ", error);
      })
  };
};

export function searchLoaded(movies) {
  console.log("searchLoaded running...", movies);

  return {
    type: "SEARCH_RESULTS_LOADED",
    data: movies
  };
}

export const saveMyMovie = movie => dispatch => {
  console.log("saveMyMovie running...", movie);
  axios
    .post("/movies", movie)
    .then(res => dispatch(loadMyMovieList()))
    .catch(function(error) {
      // handle error
      console.log("saveMyMovie error: ", error);
    });
};

export const removeMyMovie = id => dispatch => {
  console.log("removeMyMovie running...", id);
  axios
    .delete("/movies/" + id)
    .then(res => dispatch(loadMyMovieList()))
    .catch(function(error) {
      // handle error
      console.log("removeMyMovie error: ", error);
    });
};
