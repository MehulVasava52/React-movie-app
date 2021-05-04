import {
  SEARCH,
  PAGE_LIST,
  FETCH,
  FETCH_FAILURE,
  FETCH_INFO,
  FILTER_MOVIES,
  TOGGLE_SIDEBAR,
  MOVIE_GENRES
} from "../actions/Actions";
const initialState = {
  list: [],
  pageNo: 1,
  totalPages: 0,
  searchQuery: "",
  fetching: false,
  fetchFailed: false,
  movieInfo: {},
  filters: [],
  genres: [],
  hasFilters: false
};

const mainReducer = (state = initialState, action) => {
  console.log(action, "action in reducer");
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        list: action.list,
        fetching: action.fetching,
        searchQuery: action.searchQuery,
        totalPages: action.totalPages,
        pageNo: action.pageNo
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: action.isSideBarOpen
      };
    case PAGE_LIST:
      return {
        ...state,
        fetching: action.fetching,
        list: action.list,
        pageNo: action.pageNo
      };
    case FETCH:
      console.log("in fetch");
      return {
        ...state,
        fetching: true
      };
    case MOVIE_GENRES:
      return {
        ...state,
        genres: action.genres
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        fetchFailed: true
      };
    case FETCH_INFO:
      return {
        ...state,
        fetching: action.fetching,
        movieInfo: action.movieInfo
      };
    case FILTER_MOVIES:
      return {
        ...state,
        list: action.list,
        totalPages: action.totalPages,
        pageNo: action.pageNo
      };
    default:
      return state;
  }
};

export default mainReducer;
