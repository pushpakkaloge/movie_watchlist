import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';
export const RATE_MOVIE = 'RATE_MOVIE';
export const REVIEW_MOVIE = 'REVIEW_MOVIE';

const apiUrl = 'http://localhost:3001/movies'; // JSON server URL

export const getMovies = () => async dispatch => {
  const response = await axios.get(apiUrl);
  dispatch({ type: GET_MOVIES, payload: response.data });
};

export const addMovie = movie => async dispatch => {
  const response = await axios.post(apiUrl, movie);
  dispatch({ type: ADD_MOVIE, payload: response.data });
};

export const editMovie = movie => async dispatch => {
  const response = await axios.put(`${apiUrl}/${movie.id}`, movie);
  dispatch({ type: EDIT_MOVIE, payload: response.data });
};

export const deleteMovie = id => async dispatch => {
  await axios.delete(`${apiUrl}/${id}`);
  dispatch({ type: DELETE_MOVIE, payload: id });
};

export const toggleWatched = id => async dispatch => {
  const response = await axios.get(`${apiUrl}/${id}`);
  const updatedMovie = { ...response.data, watched: !response.data.watched };
  await axios.put(`${apiUrl}/${id}`, updatedMovie);
  dispatch({ type: TOGGLE_WATCHED, payload: updatedMovie });
};

export const rateMovie = (id, rating) => async dispatch => {
  const response = await axios.get(`${apiUrl}/${id}`);
  const updatedMovie = { ...response.data, rating };
  await axios.put(`${apiUrl}/${id}`, updatedMovie);
  dispatch({ type: RATE_MOVIE, payload: updatedMovie });
};

export const reviewMovie = (id, review) => async dispatch => {
  const response = await axios.get(`${apiUrl}/${id}`);
  const updatedMovie = { ...response.data, review };
  await axios.put(`${apiUrl}/${id}`, updatedMovie);
  dispatch({ type: REVIEW_MOVIE, payload: updatedMovie });
};
