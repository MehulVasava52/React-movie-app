import { getSearchMovieList } from "../actions/ActionCreators.js";
import { connect } from "react-redux";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ searchList, searchQuery }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyPress={(e) => {
          console.log(e, "eeee");
          if (e.code === "Enter") {
            searchList(searchInput);
          }
        }}
        className="searchInput"
      />
      <FaSearch
        className="searchBtn"
        onClick={() => {
          searchList(searchInput);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
  };
};
export default connect(mapStateToProps, { searchList: getSearchMovieList })(
  SearchBar
);
