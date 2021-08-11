import { useState, useEffect } from 'react';
import customFetch from '../services/fetch';
import logo from '../img/oops.png';

export default function Cast({ movieId }) {
  const [{ cast }, setCast] = useState([]);

  useEffect(() => {
    customFetch.getCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cast && cast.length > 0 ? (
          cast.map(({ id, profile_path, name }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt=""
                  style={{ marginRight: 20 }}
                  width="120"
                  height="170"
                />
              ) : (
                <img src={logo} alt="error" height="170" width="120" style={{ marginRight: 20 }} />
              )}
              <p>{name}</p>
            </li>
          ))
        ) : (
          <b>Oops...nothing found!</b>
        )}
      </ul>
    </div>
  );
}
