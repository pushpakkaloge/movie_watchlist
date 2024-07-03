import {
    GET_MOVIES,
    ADD_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    TOGGLE_WATCHED,
    RATE_MOVIE,
    REVIEW_MOVIE
  } from '../actions/movieActions';
  
  const initialState = {
    movies: []
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        return { ...state, movies: action.payload };
      case ADD_MOVIE:
        return { ...state, movies: [...state.movies, action.payload] };
      case EDIT_MOVIE:
        return {
          ...state,
          movies: state.movies.map(movie =>
            movie.id === action.payload.id ? action.payload : movie
          )
        };
      case DELETE_MOVIE:
        return {
          ...state,
          movies: state.movies.filter(movie => movie.id !== action.payload)
        };
      case TOGGLE_WATCHED:
      case RATE_MOVIE:
      case REVIEW_MOVIE:
        return {
          ...state,
          movies: state.movies.map(movie =>
            movie.id === action.payload.id ? action.payload : movie
          )
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  