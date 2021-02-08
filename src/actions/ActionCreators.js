import { SEARCH, PAGE_LIST } from "./Actions.js";
import { fetchMovieList } from "./ApiActions";

export const getSearchMovieList = (srchQuery) => async (dispatch) => {
  let resp = await fetchMovieList(srchQuery, 1);
  dispatch({
    list: resp.results,
    pageNo: 1,
    searchQuery: srchQuery,
    totalPages: resp.total_pages,
    type: SEARCH
  });
};
export const getListPerPage = (srchQuery, pageNo) => async (dispatch) => {
  let resp = await fetchMovieList(srchQuery, pageNo);
  dispatch({
    list: resp.results,
    pageNo: resp.page,
    type: PAGE_LIST
  });
};
