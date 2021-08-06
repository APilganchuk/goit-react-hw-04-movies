import Axios from 'axios';

const KEY = 'd1df898114046e16262921bfb92abbc8';
const PATH = 'https://api.themoviedb.org/3/';

const getPopularMovies = () =>
  Axios.get(`${PATH}trending/movie/day?api_key=${KEY}`).then(({ data }) => data.results);

const getCurrentMovie = movieId =>
  Axios.get(`${PATH}/movie/${movieId}?api_key=${KEY}`)
    .then(({ data }) => data)
    .catch(e => console.log(e));
const getCastMovie = movieId =>
  Axios.get(`${PATH}/movie/${movieId}/credits?api_key=${KEY}`).then(({ data }) => data);

const customFetch = { getPopularMovies, getCurrentMovie, getCastMovie };

export default customFetch;
