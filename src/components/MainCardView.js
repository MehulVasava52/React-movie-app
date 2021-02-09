import { connect } from "react-redux";
import MovieCard from "./Card";
import Loader from "./Loader";

const MainCardView = ({ fetching, list }) => {
  console.log(fetching, "fetching");
  return (
    <div className="mainCardView">
      {fetching ? (
        <Loader />
      ) : list && list.length > 0 ? (
        list.map((movie) => {
          return <MovieCard key={movie.id} movieDetails={movie} />;
        })
      ) : (
        "No movies found."
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "list in map state");
  return { list: state.list, fetching: state.fetching };
};

export default connect(mapStateToProps)(MainCardView);
