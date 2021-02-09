import {
  getSearchMovieList,
  startFetchMovies
} from "../actions/ActionCreators.js";
import { connect } from "react-redux";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "& input": {
        color: "white"
      }
    },
    "& label": {
      color: "white"
    }
  }
});
const SearchBar = ({ searchList, searchQuery }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="searchBarContainer">
      <TextField
        id="outlined-secondary"
        label="Search Movies"
        variant="outlined"
        type="text"
        className={classes.root}
        fullWidth={true}
        size="small"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
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
const mapDispatchToProps = (dispatch) => {
  return {
    searchList: (searchQuery) => dispatch(getSearchMovieList(searchQuery)),
    startFetchMovies: () => dispatch(startFetchMovies())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
