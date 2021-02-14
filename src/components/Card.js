import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { API } from "../constants/index";
import { connect } from "react-redux";
import {
  fetchDetailedMovieInfo,
  startFetchMovies
} from "../actions/ActionCreators";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    width: "20%",
    minHeight: "10%",
    margin: 20,
    "&:hover": {
      boxShadow: "5px 3px 15px #888888"
    }
  },
  media: {
    height: 300,
    backgroundPosition: "top"
  },
  content: {
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden"
  },
  contentRoot: {
    backgroundColor: "#d7d7d7",
    height: "100%",
    minHeight: "110px"
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  actionArea: {
    height: "100%"
  }
});

const MovieCard = ({
  movieDetails,
  fetchDetailedMovieInfo,
  startFetchMovies
}) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      onClick={() => {
        startFetchMovies();
        fetchDetailedMovieInfo(movieDetails.id);
      }}
    >
      <Link to="/detailedView">
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={
              movieDetails.poster_path
                ? API.backgroundImgBaseUrl + movieDetails.poster_path
                : API.noBackgroundImageUrl
            }
            title={movieDetails.title}
          />
          <CardContent className={classes.contentRoot}>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {movieDetails.title}
            </Typography>
            <Typography
              className={classes.content}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {movieDetails.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Link>
    </Card>
  );
};

export default connect(null, { startFetchMovies, fetchDetailedMovieInfo })(
  MovieCard
);
