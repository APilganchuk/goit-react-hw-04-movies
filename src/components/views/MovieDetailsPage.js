import customFetch from '../services/fetch';
import Reviews from './Reviews';
import Cast from './Cast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Route, useRouteMatch } from 'react-router';
import { useHistory, useLocation } from 'react-router';
import { Switch } from 'react-router';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const route = useRouteMatch();

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
      <button
        style={{
          padding: 5,
          marginBottom: 10,
          color: '#2196f3',
          cursor: 'pointer',
          fontWeight: 500,
        }}
        onClick={onClickBack}
      >
        BACK
      </button>

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
      <div>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: 300,
          }}
        >
          {console.log(`${route.path}/cast`)}
          <Link to={`${route.url}/cast`}>
            <h2>Cast</h2>
          </Link>
          <Link to={`${route.url}/reviews`}>
            <h2>Reviews</h2>
          </Link>
        </nav>
      </div>
      <Switch>
        <Route path={`${route.path}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${route.path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
