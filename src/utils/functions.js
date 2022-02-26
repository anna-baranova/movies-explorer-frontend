export default function searchFilter(movies, isShortMovie, searchText) {
  let allMovies = movies;
  let filteredMovies 

  if (isShortMovie) {
    allMovies = allMovies.filter((movie) => movie.duration <= 40);
  }

  filteredMovies = allMovies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
  })
  return filteredMovies;
}

