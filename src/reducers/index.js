/* eslint-disable no-console */
export default function(state = {}, action) {
  console.log("reducers", action.type);
  switch (action.type) {
    case "LOAD_SEARCH":
      return action.data;
    case "SEARCH_RESULTS_LOADED":
      return action.data;
    case "MY_MOVIE_LIST_LOADED":
      return action.data;
    case "LOAD_MY_MOVIE_LIST":
      return action.data;
    default:
      return state;
  }
}
