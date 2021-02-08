import { SEARCH, PAGE_LIST } from "../actions/Actions";
const initialState = {
  list: [],
  pageNo: 1,
  totalPages: 0,
  searchQuery: ""
};
// set loader
const mainReducer = (state = initialState, action) => {
  console.log(action, "action in reducer");
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        list: action.list,
        searchQuery: action.searchQuery,
        totalPages: action.totalPages,
        pageNo: action.pageNo
      };
    case PAGE_LIST:
      return {
        ...state,
        list: action.list,
        pageNo: action.pageNo
      };
    default:
      return state;
  }
};

export default mainReducer;
