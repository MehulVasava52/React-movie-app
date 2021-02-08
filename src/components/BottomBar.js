import { getListPerPage } from "../actions/ActionCreators";
import { connect } from "react-redux";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .MuiPaginationItem-root": { color: "white" }
  }
});

const BottomBar = ({ pageNo, searchQuery, totalPages, getListPerPage }) => {
  console.log(pageNo, "in pagination");
  const classes = useStyles();
  return (
    <div className="bottomBar">
      <Pagination
        className={classes.root}
        color="secondary"
        size="large"
        page={pageNo}
        count={totalPages}
        onChange={(e, pageNo) => {
          getListPerPage(searchQuery, pageNo);
        }}
      />
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
