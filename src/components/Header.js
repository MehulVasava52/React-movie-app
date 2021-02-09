import SearchBar from "./SearchBar";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button
} from "@material-ui/core";
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
const Header = () => {
  const classes = useStyles();
  return (
    <div className="headerContainer">
      {/* <img className="logo" src={require("../resources/images/logo.png")} /> */}
      {/* <SearchBar /> */}
      <AppBar color="secondary" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolBarLeftContainer}>
            <Typography
              className={classes.appName}
              variant="h6"
              component="h2"
              align="center"
            >
              Mehul React App
            </Typography>
            <SearchBar />
          </div>
          <ButtonGroup
            className={classes.buttonGroup}
            variant="text"
            size="large"
            aria-label="text primary button group"
          >
            <Button>Home</Button>
            <Button>List</Button>
            <Button>Filter</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
