import { BEATFILM_URL } from "./constants";

class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`${res.status}`); 
    }
    return res.json();
  }

  getUserData(jwt) {
    return fetch (`${this._baseUrl}/users/me`, {
      headers: {authorization: `Bearer ${jwt}`},
      credentials: 'include',
    })
    .then(res => this._getResponseData(res))
  }    

  getMovies(jwt) {
    return fetch (`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${jwt}`
      },
      credentials: 'include',
      })
      .then(res => this._getResponseData(res))
  };

  changeUserData(jwt, name, email) {
    return fetch (`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(res => this._getResponseData(res))
  }

  saveMovie(movie, jwt) {
    return fetch (`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: BEATFILM_URL + movie.image.url ,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: BEATFILM_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id
      })
    })
    .then(res => this._getResponseData(res))
  }

  removeSavedMovie(movie, jwt) {
    return fetch (`${this._baseUrl}/movies/${movie._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then(res => this._getResponseData(res))
  }

  getSavedMovies(jwt) {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {     
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    })
      .then(res => this._processingResponse(res));
  }  
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movie-search.nomoredomains.work',
})

export default mainApi;

