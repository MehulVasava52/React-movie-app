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
import { PAGE_VIEWS } from "./constants/index";

const App = ({ getSearchMovieList, startFetchMovies }) => {
  useEffect(() => {
    console.log(startFetchMovies, "startFetchMovies");
    startFetchMovies();
    getSearchMovieList("the");
  }, []);

  const getComponents = (view) => {
    const isMainPage = view === PAGE_VIEWS.MAIN_PAGE;
    switch (view) {
      case PAGE_VIEWS.MAIN_PAGE:
      case PAGE_VIEWS.FILTER_PAGE:
        return (
          <>
            <Header isMainPage={isMainPage} />
            {isMainPage ? <Carousel /> : ""}
            <MainCardView />
            <ScrollTop />
            <BottomBar />
          </>
        );
      case PAGE_VIEWS.DETAILES_PAGE:
        return (
          <>
            <Header />
            <DetailedCardView />
          </>
        );
      default:
        return false;
    }
  };

  return (
    <Router>
      <div className="appContainer">
        <Switch>
          <Route exact path="/">
            {getComponents(PAGE_VIEWS.MAIN_PAGE)}
          </Route>
          <Route exact path="/discover">
            {getComponents(PAGE_VIEWS.FILTER_PAGE)}
          </Route>
          <Route exact path="/detailedView">
            {getComponents(PAGE_VIEWS.DETAILES_PAGE)}
          </Route>
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
