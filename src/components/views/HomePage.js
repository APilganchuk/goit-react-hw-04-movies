import customFetch from '../services/fetch';
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function HomePage() {
  const [popMovies, setPopMovies] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    customFetch.getPopularMovies().then(setPopMovies);
  }, []);

  return (
    <>
      <ul>
        {popMovies &&
          popMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
