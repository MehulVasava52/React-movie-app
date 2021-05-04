export const fetchMovieList = async (query, pageNo) => {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${
        query ? query : "the"
      }&api_key=cfe422613b250f702980a3bbf9e90716&page=${pageNo}`
    )
  ).json();
};

export const fetchDetailedInfo = async (movieId) => {
  console.log(movieId, "movieId");
  return await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`
    )
  ).json();
};

export const fetchMovieGenres = async () => {
  return await (
    await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?&api_key=cfe422613b250f702980a3bbf9e90716"
    )
  ).json();
};

export const fetchFilteredMovies = async (genreIds) => {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreIds}&api_key=cfe422613b250f702980a3bbf9e90716`
    )
  ).json();
};
