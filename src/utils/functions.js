import React from 'react';

function Validation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  const resetFrom = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, resetFrom, errors, isValid };
}

function searchFilter(movies, isShortMovie, searchText) {
  let allMovies = movies;
  console.log('1', allMovies)
  let filteredMovies 

  if (isShortMovie) {
    allMovies = allMovies.filter((movie) => movie.duration <= 40);
  }
  console.log("f5", isShortMovie)
  filteredMovies = allMovies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
  })
  return filteredMovies;
}

function clearAlert(setAlert) {
  setTimeout(() => {
    setAlert('')
  }, 3000)
}

export { searchFilter, Validation, clearAlert };