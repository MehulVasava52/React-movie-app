import "../resources/mainCardView.css";
import { connect } from "react-redux";
import MovieCard from "./Card";
import Loader from "./Loader";

const MainCardView = ({ fetching, movieList, genres, fetchGenres }) => {
  console.log(fetching, "fetching");
  return (
    <div id="list">
      {fetching ? (
        <Loader />
      ) : movieList && movieList.length > 0 ? (
        <div className="mainCardView">
          {movieList.map((movie) => {
            return <MovieCard key={movie.id} movieDetails={movie} />;
          })}
        </div>
      ) : (
        "No movies found."
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "list in map state");
  return {
    movieList: state.list,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps)(MainCardView);
