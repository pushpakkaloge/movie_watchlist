import React from 'react';
import AddMovieForm from './components/AddMovieForm';
import MovieList from './components/MovieList';
import './styles/main.scss';

const App = () => {
  return (
    <div className='main-div-app'>
      <h1>Movie Watchlist</h1>
      <AddMovieForm />
      <MovieList />
    </div>
  );
};

export default App;
