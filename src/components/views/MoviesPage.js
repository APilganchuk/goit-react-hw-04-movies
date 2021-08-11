import { ToastContainer, toast, Flip } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import customFetch from '../services/fetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import qs from 'query-string';

export default function MoviesPage() {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(qs.parse(search)?.query || '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    customFetch.getMovieToQuery(query).then(setMovies);
  }, [query]);

  const onInputChange = e => setInputValue(e.currentTarget.value);

  const onClickSearch = () => {
    setQuery(inputValue.trim());
    if (inputValue.trim() === '') {
      toast.warn('The field must not be empty!', { color: 'black' });
    }

    history.push({ pathname, search: `query=${inputValue}` });
  };

  return (
    <>
      <input
        onChange={onInputChange}
        value={inputValue}
        type="text"
        placeholder="what are we looking for?"
      />
      <button onClick={onClickSearch} type="submit">
        SEARCH
      </button>

      <ul style={{ marginTop: 15 }}>
        {movies.length > 0 &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${pathname}/${movie.id}`,
                  state: {
                    backUrl: pathname,
                    searchValue: `query=${query}`,
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
      <ToastContainer autoClose={2000} style={{ color: 'black' }} transition={Flip} />
    </>
  );
}
