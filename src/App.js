import './App.css';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage';
import NotFoundView from './components/views/NotFoundView';

const App = () => {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
};
export default App;
