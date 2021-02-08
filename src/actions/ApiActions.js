export const fetchMovieList = async (query, pageNo) => {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${
        query ? query : "the"
      }&api_key=cfe422613b250f702980a3bbf9e90716&page=${pageNo}`
    )
  ).json();
};
