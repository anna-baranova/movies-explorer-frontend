import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../utils/MoviesApi';

function App() {

  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [displayCards, setDisplayCards] = React.useState(false);

  const handleGetFilms = (isShortMovie, searchText) => {
    setIsLoading(true);
    moviesApi.getFilms()
      .then(dataFilms => {
        // if (isShortMovie) {
        //   const beatFilms = dataFilms.filter(movie => movie.duration <= 40);
        //   setMovies(beatFilms);
        // } else {
        //   setMovies(dataFilms);
        // }
        const byTitle = film => film.nameRU.toLowerCase().includes(searchText.toLowerCase());
        const byDuration = film => film.duration <= 40;
        setMovies(isShortMovie
          ? dataFilms.filter(byDuration).filter(byTitle)
          : dataFilms.filter(byTitle)
        );
        setIsLoading(false);
        setDisplayCards(true);
        console.log(dataFilms);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="page">  
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/movies">
            <Movies onGetFilms={handleGetFilms} movies={movies} displayCards={displayCards} isLoading={isLoading}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
