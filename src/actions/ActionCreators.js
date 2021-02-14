import {
  SEARCH,
  PAGE_LIST,
  FETCH,
  FETCH_INFO,
  FETCH_FAILURE,
  FILTER_MOVIES
} from "./Actions.js";
import {
  fetchMovieList,
  fetchDetailedInfo,
  fetchFilteredMovies
} from "./ApiActions";

export const getSearchMovieList = (srchQuery) => async (dispatch) => {
  let resp;
  try {
    resp = await fetchMovieList(srchQuery, 1);
  } catch (e) {
    // catch not working...
    console.log("in catch");
    dispatch({
      type: FETCH_FAILURE,
      fetching: false
    });
    return;
  }
  dispatch({
    list: resp.results,
    pageNo: 1,
    fetching: false,
    searchQuery: srchQuery,
    totalPages: resp.total_pages,
    type: SEARCH
  });
};

export const getListPerPage = (srchQuery, pageNo) => async (dispatch) => {
  let resp;
  try {
    resp = await fetchMovieList(srchQuery, pageNo);
  } catch (e) {
    dispatch({
      type: FETCH_FAILURE,
      fetching: false
    });
    return;
  }
  dispatch({
    list: resp.results,
    pageNo: resp.page,
    type: PAGE_LIST,
    fetching: false
  });
};

export const fetchDetailedMovieInfo = (movieId) => async (dispatch) => {
  const resp = await fetchDetailedInfo(movieId);
  console.log(resp, "resp for info");
  dispatch({
    type: FETCH_INFO,
    fetching: false,
    movieInfo: resp
  });
};

export const startFetchMovies = () => {
  console.log("in action creator fetch ");
  return {
    type: FETCH
  };
};

export const sendFecthFailure = () => {
  return {
    type: FETCH_FAILURE
  };
};

export const filterMovies = () => async (dispatch) => {
  let resp = await fetchFilteredMovies();
  dispatch({
    type: FILTER_MOVIES,
    genres: resp.genres
  });
};
