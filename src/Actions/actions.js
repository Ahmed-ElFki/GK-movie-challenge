import {
  ADD,
  UPDATE_MOVIE_DATA,
  UPDATE_TOGGLE_STATE,
  UPDATE_MOVIE_ID,
  DELETE,
  FILTER,
} from "../Constants/constants";

function addMovie(movie) {
  return {
    type: ADD,
    payload: movie,
  };
}

function deleteMovie(id) {
  return {
    type: DELETE,
    payload: id,
  };
}

function filterMovie(filter) {
  return {
    type: FILTER,
    payload: filter,
  };
}

function updateMovieData(update) {
  return {
    type: UPDATE_MOVIE_DATA,
    payload: update,
  };
}

function updateToggleState(id) {
  return {
    type: UPDATE_TOGGLE_STATE,
    payload: id,
  };
}

export {
  addMovie,
  deleteMovie,
  filterMovie,
  updateMovieData,
  updateToggleState,
};
