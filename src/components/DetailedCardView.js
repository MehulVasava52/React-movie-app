import { connect } from "react-redux";
import { API } from "../constants/index";
import Loader from "../components/Loader";
import "../resources/detailedViewPage.css";

const DetailedCardView = ({ fetching, movieInfo }) => {
  const dataNotAvailable = "-";
  const vote = movieInfo.vote ? `${movieInfo.vote}/10` : dataNotAvailable;
  const totalRevenue = movieInfo.revenue ? movieInfo.revenue : dataNotAvailable;
  const imagePath = movieInfo.poster_path
    ? API.backgroundImgBaseUrl + movieInfo.poster_path
    : API.noBackgroundImageUrl;
  const getBackgroundPoster = () => {
    return {
      backgroundImage: `url(${
        API.backdropImgBaseUrl + movieInfo.backdrop_path
      })`
    };
  };

  const getSeparatedList = (list) => {
    if (!list || !list.length) {
      return "";
    }

    return list.reduce((acc, item) => {
      return (acc += item.name + "; ");
    }, "");
  };

  return fetching ? (
    <Loader />
  ) : (
    <div className="detailedViewContainer" style={getBackgroundPoster()}>
      <div className="detailViewBgLayer">
        <div className="detailedViewBgImg">
          <div className="detailedMovieImg">
            <img src={imagePath} />
          </div>
          <div className="detailedMovieInfo">
            <div>
              <h1>{movieInfo.original_title}</h1>
              <span className="tagline infoColor">{movieInfo.tagline}</span>
              <p>{movieInfo.overview}</p>
              <div className="additionalDetails">
                <span className="genreList infoColor">
                  {getSeparatedList(movieInfo.genres)}
                </span>
                <span className="productionList">
                  {getSeparatedList(movieInfo.production_companies)}
                </span>
                <div className="releaseDetails">
                  <div>
                    <label>Original Release:</label>
                    <span className="meta-data infoColor">
                      {movieInfo.release_date}
                    </span>
                  </div>
                  <div>
                    <label>Running Time:</label>
                    <span className="meta-data infoColor">
                      {movieInfo.runtime} mins
                    </span>
                  </div>
                  <div>
                    <label>Box Office:</label>
                    <span className="meta-data infoColor">{totalRevenue}</span>
                  </div>
                  <div>
                    <label>Vote Average:</label>
                    <span className="meta-data infoColor">{vote}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.movieInfo, "state in detailed");
  return {
    movieInfo: state.movieInfo,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps)(DetailedCardView);
