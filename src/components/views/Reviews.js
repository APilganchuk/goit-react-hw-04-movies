import React from 'react';
import { useState, useEffect } from 'react';
import customFetch from '../services/fetch';

export default function Reviews({ movieId }) {
  const [{ results }, setReviews] = useState([]);
  useEffect(() => {
    customFetch.getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <ul>
        {results && results.length > 0 ? (
          results.map(item => (
            <li key={item.id}>
              <b>{item.author}:</b>

              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <b>Oops!!!No reviews!</b>
        )}
      </ul>
    </div>
  );
}
