const MOVIES = {
  PAGE_LIST: "GET_LIST_PER_PAGE",
  SEARCH: "SEARCH",
  FETCHING: "FETCH_MOVIES",
  FETCH_INFO: "FETCH_INFO",
  FETCH_FAILURE: "FETCH_FAILURE",
  FILTER_MOVIES: "FILTER_MOVIES",
  MOVIE_GENRES: "MOVIE_GENRES"
};

const PAGE_VIEWS = {
  MAIN_PAGE: 1,
  FILTER_PAGE: 2,
  DETAILES_PAGE: 3
};
const SIDEBAR = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
};
const API = {
  backgroundImgBaseUrl: "https://image.tmdb.org/t/p/w500",
  backdropImgBaseUrl: "https://image.tmdb.org/t/p/original",
  noBackgroundImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"
};

export { MOVIES, PAGE_VIEWS, API, SIDEBAR };
