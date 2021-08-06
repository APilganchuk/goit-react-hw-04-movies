import { useState, useEffect } from 'react';
import customFetch from '../services/fetch';
export default function Cast({ movieId }) {
  const [{ cast }, setCast] = useState([]);

  useEffect(() => {
    customFetch.getCastMovie(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast &&
        cast.map(item => (
          <li>
            <h3>{item.name}</h3>
          </li>
        ))}
    </div>
  );
}
