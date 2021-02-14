import "../resources/slider.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import { API } from "../constants/index";
import { Link } from "react-router-dom";
import {
  startFetchMovies,
  fetchDetailedMovieInfo
} from "../actions/ActionCreators";

const Carousel = ({ list, startFetchMovies, fetchDetailedMovieInfo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const getBackgroundImage = (movie) => {
    return {
      backgroundImage: `linear-gradient(180deg, rgb(245 246 252 / 24%), rgb(13 1 10)), url(${
        API.backdropImgBaseUrl + movie.backdrop_path
      })`
    };
  };

  const handleImgClick = (movie) => {
    startFetchMovies();
    fetchDetailedMovieInfo(movie.id);
  };

  return (
    <div id="home" className="sliderContainer">
      <Slider {...settings}>
        {list.map((movie, index) => {
          return (
            <div key={index}>
              <div
                className="sliderImgContainer"
                style={getBackgroundImage(movie)}
              >
                <Link to="/detailedView">
                  <img
                    onClick={handleImgClick.bind(this, movie)}
                    src={API.backgroundImgBaseUrl + movie.poster_path}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
};
export default connect(mapStateToProps, {
  startFetchMovies,
  fetchDetailedMovieInfo
})(Carousel);
