import { useState, useEffect } from 'react';
import customFetch from '../services/fetch';
import { useRouteMatch } from 'react-router';
export default function Cast({ movieId }) {
  const [{ cast }, setCast] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    customFetch.getCastMovie(movieId).then(setCast);
  }, [match, movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
          </li>
        ))}
    </div>
  );
}
