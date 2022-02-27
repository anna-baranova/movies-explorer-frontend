export default function searchFilter(movies, isShortMovie, searchText) {
  console.log("f1", movies)
  console.log("f2", isShortMovie)
  console.log("f3", searchText)
  let allMovies = movies;
  console.log("f4", allMovies)
  let filteredMovies 

  if (isShortMovie) {
    allMovies = allMovies.filter((movie) => movie.duration <= 40);
    console.log("все сохраненные фильмы", allMovies)
  }
  console.log("f5", isShortMovie)
  filteredMovies = allMovies.filter((movie) => {
    console.log("f6", movie.nameRU)
    return movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
  })
  console.log("f7", filteredMovies)
  return filteredMovies;
}

