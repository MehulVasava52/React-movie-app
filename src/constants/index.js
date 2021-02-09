const MOVIES = {
  PAGE_LIST: "GET_LIST_PER_PAGE",
  SEARCH: "SEARCH",
  FETCHING: "FETCH_MOVIES",
  FETCH_FAILURE: "FETCH_FAILURE"
};

const API = {
  backgroundImgBaseUrl: "https://image.tmdb.org/t/p/w500",
  backdropImgBaseUrl: "https://image.tmdb.org/t/p/original",
  noBackgroundImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"
};

export { MOVIES, API };
