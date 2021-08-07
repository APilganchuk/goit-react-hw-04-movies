import customFetch from '../services/fetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    if (query === '') {
      return;
    }
    customFetch.getMovieToQuery(query).then(setMovies);
  }, [query]);

  const onInputChange = e => setInputValue(e.currentTarget.value);

  return (
    <>
      <input
        onChange={onInputChange}
        value={inputValue}
        type="text"
        placeholder="what are we looking for?"
      />
      <button onClick={() => setQuery(inputValue)} type="submit">
        SEARCH
      </button>
      <ul style={{ marginTop: 15 }}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
