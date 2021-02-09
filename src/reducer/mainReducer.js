import { SEARCH, PAGE_LIST, FETCH, FETCH_FAILURE } from "../actions/Actions";
const initialState = {
  list: [],
  pageNo: 1,
  totalPages: 0,
  searchQuery: "",
  fetching: false,
  fetchFailed: false
};
// set loader
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
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        fetchFailed: true
      };
    default:
      return state;
  }
};

export default mainReducer;
