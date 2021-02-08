import { connect } from "react-redux";
import { getSearchMovieList } from "../actions/ActionCreators";
import { useEffect } from "react";
import MovieCard from "./Card";
const MainCardView = ({ list, getSearchMovieList }) => {
  useEffect(() => {
    getSearchMovieList("the");
  }, []);

  return (
    <div className="mainCardView">
      {list.length > 0
        ? list.map((movie) => {
            return <MovieCard key={movie.id} movieDetails={movie} />;
          })
        : "No movies found."}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "list in map state");
  return { list: state.list };
};

export default connect(mapStateToProps, { getSearchMovieList })(MainCardView);
