import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions/movieActions';

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      releaseYear,
      genre,
      watched: false,
      rating: 0,
      review: ''
    };
    dispatch(addMovie(newMovie));
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Release Year"
        value={releaseYear}
        onChange={e => setReleaseYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={e => setGenre(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
