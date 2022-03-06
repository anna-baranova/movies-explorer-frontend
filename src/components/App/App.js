import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {register, login, checkToken} from '../../utils/Auth';
import {clearError} from '../../utils/functions';

function App() {
  const history = new useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] =  React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [authError, setAuthError] = React.useState('');


  function handleRegisterUser({name, email, password}) {
    setIsLoading(true)
    register(name, email, password)
      .then((res) => {
        if (res) {
          handleLoginUser({email, password})
        }
      })
      .catch((e) => {
        if (e === "Ошибка: 409") {
          setAuthError('Данный email используется другим пользователем')
          clearError(setAuthError);
          console.log(`Данный email используется другим пользователем: ${e}`)
        } else {
          setAuthError('Ошибка при регистрации пользователя')
          clearError(setAuthError);
          console.log(`Ошибка при регистрации пользователя: ${e}`);
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleLoginUser({email, password}) {
    setIsLoading(true);
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
        if (e === "Ошибка: 401") {
          setAuthError('Неправильная почта или пароль')
          clearError(setAuthError);
          console.log(`Неправильная почта или пароль: ${e}`);
        } else {
          setAuthError('Ошибка при авторизации пользователя')
          clearError(setAuthError);
          console.log(`Ошибка при авторизации пользователя: ${e}`);
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAuthError('');
  //   }, 3000);
    
  //   // To clear or cancel a timer, you call the clearTimeout(); method, 
  //   // passing in the timer object that you created into clearTimeout().
    
  //   return () => clearTimeout(timer);
  // }, []);  

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/')
  }

  function handleUpdateUser({name, email}) {
    const jwt = localStorage.getItem('jwt');
    mainApi.changeUserData(jwt, name, email)
      .then(res => {
        console.log("updatedUser", res)
        setCurrentUser({email: res.email, name: res.name, _id: res._id});
      })
      .catch(e => console.log(`Ошибка при изменении данных пользователя: ${e}`))
  }

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
            {loggedIn ? <Redirect to='/' /> :
              <Register 
                onRegister={handleRegisterUser} 
                isLoading={isLoading} 
                authError={authError}
              />}
          </Route>
          <Route path="/signin">
            {loggedIn ? <Redirect to='/' /> :
              <Login 
                onLogin={handleLoginUser} 
                isLoading={isLoading} 
                authError={authError}
              />}
          </Route>
          <ProtectedRoute 
            path="/movies"
            component={Movies} 
            savedMovies={savedMovies}
            onMovieSave={handleSaveMovies}
            onMovieDelete={handleDeleteMovies}
          />
          <ProtectedRoute 
            path="/saved-movies"
            component={SavedMovies} 
            savedMovies={savedMovies} 
            onMovieDelete={handleDeleteMovies}
          />
          <ProtectedRoute 
            path="/profile"
            component={Profile}
            onUpdateUser={handleUpdateUser} 
            onLogout={handleLogout} 
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
