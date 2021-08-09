import customFetch from '../services/fetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Cast from './Cast';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { useHistory, useLocation } from 'react-router';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();

  const [currentMovie, setCurrentMovie] = useState([]);
  const { poster_path, title, vote_average, overview, genres } = currentMovie;

  const { movieId } = useParams();
  useEffect(() => {
    customFetch.getCurrentMovie(movieId).then(setCurrentMovie);
  }, [movieId]);

  const onClickBack = () => {
    history.push({
      pathname: location.state?.backUrl || '/',
      search: location.state?.searchValue || '/',
    });
  };
  return (
    <>
      <button onClick={onClickBack}>back</button>

      <div style={{ display: 'flex' }}>
        {currentMovie && (
          <>
            <img
              src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              style={{ marginRight: 20 }}
            />
            <div>
              <h1>{title}</h1>
              <p>
                <b>Overview</b>
                <br /> {vote_average}
              </p>
              <p>
                <b>Description:</b>
                <br /> {overview}
              </p>
              <div>
                <b>Genres:</b>
                <ul>{genres && genres.map(item => <li key={item.id}>{item.name}</li>)}</ul>
              </div>
            </div>
          </>
        )}
      </div>

      <Route path={`/movies/${movieId}/cast`}>
        <Link to={`/movies/${movieId}/cast`}>
          <Cast movieId={movieId} />
        </Link>
      </Route>
    </>
  );
}
