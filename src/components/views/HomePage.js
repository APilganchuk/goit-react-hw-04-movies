import customFetch from '../services/fetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    customFetch.getPopularMovies().then(setPopMovies);
  }, []);

  return (
    <>
      <h2>Trending movies:</h2>
      <ul>
        {popMovies &&
          popMovies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
