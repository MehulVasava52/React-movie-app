import { SEARCH, PAGE_LIST, FETCH, FETCH_FAILURE } from "./Actions.js";
import { fetchMovieList } from "./ApiActions";

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
