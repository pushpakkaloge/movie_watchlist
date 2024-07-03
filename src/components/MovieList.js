import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/movieActions';
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
