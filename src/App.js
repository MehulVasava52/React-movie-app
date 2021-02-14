import "./resources/styles.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { startFetchMovies, getSearchMovieList } from "./actions/ActionCreators";
import MainCardView from "./components/MainCardView";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Carousel from "./components/Carousel";
import DetailedCardView from "./components/DetailedCardView";
import ScrollTop from "./components/ScrollTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = ({ getSearchMovieList, startFetchMovies }) => {
  useEffect(() => {
    console.log(startFetchMovies, "startFetchMovies");
    startFetchMovies();
    getSearchMovieList("the");
  }, []);

  return (
    <Router>
      <div className="appContainer">
        <Header />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <MainCardView />
            <ScrollTop />
            <BottomBar />
          </Route>
          <Route exact path="/detailedView" component={DetailedCardView} />
        </Switch>
      </div>
    </Router>
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
