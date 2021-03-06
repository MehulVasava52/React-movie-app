import "../resources/header.css";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link as RouterLink } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { toggleSideBar, fetchGenres } from "../actions/ActionCreators";

const useStyles = makeStyles({
  root: {
    minHeight: 80,
    display: "flex",
    justifyContent: "center"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
  },
  toolBarLeftContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "40%",
    alignItems: "center"
  },
  appName: {
    fontFamily: "sans-serif, serif"
  },
  buttonGroup: {
    "& .MuiButtonGroup-groupedTextHorizontal": {
      color: "white",
      borderColor: "white",
      "& .MuiButton-label": {
        fontSize: "1em"
      }
    }
  }
});

const Header = ({ isSideBar, toggleSideBar, fetchGenres }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <div id="app-header" className="headerContainer">
      <AppBar color="secondary" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolBarLeftContainer}>
            {isSideBar && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  toggleSideBar(true);
                }}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            )}
            <RouterLink to="/">
              <Typography
                className={classes.appName}
                variant="h6"
                component="h2"
                align="center"
              >
                Mehul React App
              </Typography>
            </RouterLink>
            <SearchBar />
          </div>
          <ButtonGroup
            className={classes.buttonGroup}
            variant="text"
            size="large"
            aria-label="text primary button group"
          >
            <RouterLink to="/">
              <Button>Home</Button>
            </RouterLink>
            <RouterLink to="/discover">
              <Button>Discover</Button>
            </RouterLink>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connect(null, { toggleSideBar, fetchGenres })(Header);
