import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {register, login, checkToken} from '../../utils/Auth';

function App() {
  const history = new useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);  //СКОПИРОВАЛА В МУВИЗ
  const [isLoading, setIsLoading] = React.useState(false); //СКОПИРОВАЛА В МУВИЗ
  const [currentUser, setCurrentUser] = React.useState({});
  const [wasRequest, setWasRequest] = React.useState(false); //СКОПИРОВАЛА В МУВИЗ
  const [savedMovies, setSavedMovies] =  React.useState([]);

  function handleRegisterUser({name, email, password}) {
    register(name, email, password)
      .then((res) => {
        if (res) {
          handleLoginUser({email, password})
        }
      })
      .catch((e) => {
        if (e.status === 400) {
          console.log(`Ошибка при регистрации пользователя: ${e}`);
        }
      })
  }

  function handleLoginUser({email, password}) {
    login(email, password)
      .then((res) => {
        console.log("loginUser", res)
        if (res && res.token) {
          setCurrentUser({email: res.user.email, name: res.user.name, _id: res.user._id})
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((e) => {
        if (e.status === 400) {
          console.log(`Ошибка при авторизации пользователя: ${e}`);
        }
    });
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    history.push("/signin");
  }

  function handleUpdateUser({name, email}) {
    const jwt = localStorage.getItem('jwt');
    mainApi.changeUserData(jwt, name, email)
      .then(res => {
        setCurrentUser({email: res.email, name: res.name, _id: res._id});
      })
        .catch(e => console.log(`Ошибка при изменении данных пользователя: ${e}`))
  }

  //--------------ПРОБУЮ ПЕРЕНЕСТИ В MOVIES---------------
  // const handleGetFilms = (isShortMovie, searchText) => {
    
  //   const allMoviesinLocalStorage = JSON.parse(localStorage.getItem('BeatFilmsList'));

  //   if(!allMoviesinLocalStorage) {
  //     setIsLoading(true);
  //     moviesApi.getFilms()
  //       .then(dataFilms => {
  //         localStorage.setItem('BeatFilmsList', JSON.stringify(dataFilms));
  //         const byTitle = film => film.nameRU.toLowerCase().includes(searchText.toLowerCase());
  //         const byDuration = film => film.duration <= 40;
  //         setMovies(isShortMovie
  //           ? dataFilms.filter(byDuration).filter(byTitle)
  //           : dataFilms.filter(byTitle)
  //         );
  //         // setDisplayCards(true);
  //         setWasRequest(true);
  //         console.log(dataFilms);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //     })
  //   } else {
  //     setMovies(allMoviesinLocalStorage)
  //   }
  // };


  function handleSaveMovies (movie) {
    const jwt = localStorage.getItem('jwt');
    mainApi.saveMovie(movie, jwt)
      .then((newMovie) => {
        setSavedMovies((movieList) => [
          newMovie,
          ...movieList
        ]);
        console.log("savedMovies", savedMovies)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleDeleteMovies(movie) {
    const jwt = localStorage.getItem('jwt');
    mainApi.removeSavedMovie(movie, jwt)
    .then(() => {
      setSavedMovies((movies) => movies.filter((m) => m._id !== movie._id));
    })
    .catch(err => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserData(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getMovies(jwt)
        .then((data) => {
          setSavedMovies(data.filter((movie) => movie.owner === currentUser._id));
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [currentUser]);

  //сделать как-то попроще
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if(token) {
      const handleCheckToken = () => {
        console.log("handleCheck", token)
          checkToken(token)
            .then((res) => {
              if(res) {
                console.log(res)
                setCurrentUser({email: res.email, name: res.name, _id: res._id});
                setLoggedIn(true);
                console.log(currentUser)
                // history.push('/');
              } else {
                setLoggedIn(false);
                history.push('/');
              }
            })
            .catch((err) => {
              console.log(err)
            })
      }
      handleCheckToken();
    }     
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
          <div className="page">  
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegisterUser}/>
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLoginUser}/>
          </Route>
          <Route path="/movies">
            <Movies 
              savedMovies={savedMovies}
              onMovieSave={handleSaveMovies}
              onMovieDelete={handleDeleteMovies}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies 
              savedMovies={savedMovies} 
              onMovieDelete={handleDeleteMovies}
            />
          </Route>
          <Route path="/profile">
            <Profile onUpdateUser={handleUpdateUser} onLogout={handleLogout} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
