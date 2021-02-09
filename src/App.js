import "./resources/styles.css";
import MainCardView from "./components/MainCardView";
import Header from "./components/Header";
import { useEffect } from "react";
import { connect } from "react-redux";
import BottomBar from "./components/BottomBar";
import Carousel from "./components/Carousel";
import { startFetchMovies, getSearchMovieList } from "./actions/ActionCreators";

const App = ({ getSearchMovieList, startFetchMovies }) => {
  useEffect(() => {
    console.log(startFetchMovies, "startFetchMovies");
    startFetchMovies();
    getSearchMovieList("the");
  }, []);
  return (
    <div className="appContainer">
      <Header />
      <Carousel />
      <MainCardView />
      <BottomBar />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSearchMovieList: (searchQuery) =>
      dispatch(getSearchMovieList(searchQuery)),
    startFetchMovies: () => dispatch(startFetchMovies())
  };
};
export default connect(null, mapDispatchToProps)(App);
