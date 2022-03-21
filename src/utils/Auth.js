export const BASE_URL = 'https://api.movie-search.nomoredomains.work';

// Регистрация / авторизация пользователя
const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // credentials: 'include',
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
    }
});
};

const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: 'include',
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: 'include',
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

export {checkToken, register, login, logout};