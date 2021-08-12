import { lazy, Suspense } from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
// import HomePage from './components/views/HomePage';
// import MoviesPage from './components/views/MoviesPage';
// import MovieDetailsPage from './components/views/MovieDetailsPage';
// import NotFoundView from './components/views/NotFoundView';
const HomePage = lazy(() =>
  import('./components/views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./components/views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./components/views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */),
);
const NotFoundView = lazy(() =>
  import('./components/views/NotFoundView' /* webpackChunkName: "not-found-page" */),
);

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/" exact component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundView}></Route>
        </Switch>
      </Suspense>
    </Container>
  );
};
export default App;
