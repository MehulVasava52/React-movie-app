const backgroundImgBaseUrl = "https://image.tmdb.org/t/p/w500";
const noBackgroundImageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
const Card = ({ movieDetails }) => {
  return (
    <div className="cardContainer">
      <div
        className="card"
        style={{
          backgroundImage: `url(${
            movieDetails.poster_path
              ? backgroundImgBaseUrl + movieDetails.poster_path
              : noBackgroundImageUrl
          })`
        }}
      ></div>
      <h2 className="cardTitle">{movieDetails.title}</h2>
    </div>
  );
};

export default Card;
