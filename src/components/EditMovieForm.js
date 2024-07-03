import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMovie } from '../actions/movieActions';

const EditMovieForm = ({ movie, setEditing }) => {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [releaseYear, setReleaseYear] = useState(movie.releaseYear);
  const [genre, setGenre] = useState(movie.genre);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const updatedMovie = {
      ...movie,
      title,
      description,
      releaseYear,
      genre
    };
    dispatch(editMovie(updatedMovie));
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className='edit-movie-form'>
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
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditMovieForm;
