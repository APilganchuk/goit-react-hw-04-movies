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
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/movies/" exact component={MoviesPage}></Route>
        <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
        <Route component={NotFoundView}></Route>
      </Switch>
    </Container>
  );
};
export default App;
