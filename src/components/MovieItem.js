import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched, rateMovie, reviewMovie } from '../actions/movieActions';
import EditMovieForm from './EditMovieForm';

const MovieItem = ({ movie }) => {
  const [editing, setEditing] = useState(false);
  const [rating, setRating] = useState(movie.rating);
  const [review, setReview] = useState(movie.review);

  const dispatch = useDispatch();

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie.id));
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const handleRate = (e) => {
    const newRating = parseInt(e.target.value);
    setRating(newRating);
    dispatch(rateMovie(movie.id, newRating));
  };

  const handleReview = (e) => {
    const newReview = e.target.value;
    setReview(newReview);
    dispatch(reviewMovie(movie.id, newReview));
  };

  return (
    <div className="movie-item">
      {editing ? (
        <EditMovieForm movie={movie} setEditing={setEditing} />
      ) : (
        <div>
          <h3>Name: {movie.title}</h3>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Release year:</strong> {movie.releaseYear}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Status:</strong> {movie.watched ? 'Watched' : 'Unwatched'}</p>
          <div>
            <label>
            <strong>Rating: </strong>
              <select value={rating} onChange={handleRate}>
                {[...Array(6).keys()].slice(1).map((star) => (
                  <option key={star} value={star}>
                    {star}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className='review'>
            <label className='label'>
              <strong>Review: </strong>
              <textarea value={review} onChange={handleReview} />
            </label>
          </div>
          <button className='mark-watch' onClick={handleToggleWatched}>
            {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
          </button>
          <div className='action-buttons'>
            <button className='edit-btn' onClick={() => setEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
