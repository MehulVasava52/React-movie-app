import { connect } from "react-redux";
import { getSearchMovieList } from "../actions/ActionCreators";
import { useEffect } from "react";
import Card from "./Card";
const MainCardView = ({ list, getSearchMovieList }) => {
  useEffect(() => {
    getSearchMovieList("the");
  }, []);

  return (
    <div className="mainCardView">
      {list.map((movie) => {
        return <Card key={movie.id} movieDetails={movie} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "list in map state");
  return { list: state.list };
};

export default connect(mapStateToProps, { getSearchMovieList })(MainCardView);
