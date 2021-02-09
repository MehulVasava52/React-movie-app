import Slider from "react-slick";
import { connect } from "react-redux";
import { API } from "../constants/index";
const Carousel = ({ list }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {list.map((movie, index) => {
          return (
            <div key={index}>
              <div
                className="sliderImgContainer"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgb(245 246 252 / 24%), rgb(13 1 10)), url(${
                    API.backdropImgBaseUrl + movie.backdrop_path
                  })`
                }}
              >
                <img src={API.backgroundImgBaseUrl + movie.poster_path} />
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
export default connect(mapStateToProps)(Carousel);
