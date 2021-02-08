import { getListPerPage } from "../actions/ActionCreators";
import { connect } from "react-redux";

const BottomBar = ({ pageNo, searchQuery, totalPages, getListPerPage }) => {
  console.log(pageNo, "in pagination");
  return (
    <div className="bottomBar">
      {pageNo > 1 && (
        <button
          className="paginationButton"
          onClick={getListPerPage.bind(null, searchQuery, Number(pageNo) - 1)}
        >
          previous page
        </button>
      )}
      <p className="pageIndex"> {pageNo} </p>
      {pageNo < totalPages && (
        <button
          className="paginationButton"
          onClick={getListPerPage.bind(null, searchQuery, Number(pageNo) + 1)}
        >
          Next page
        </button>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    pageNo: state.pageNo,
    totalPages: state.totalPages,
    searchQuery: state.searchQuery
  };
};

export default connect(mapStateToProps, { getListPerPage })(BottomBar);
