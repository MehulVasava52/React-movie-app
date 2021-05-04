import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { connect } from "react-redux";
import FilterForm from "./FilterForm";
import { toggleSideBar } from "../actions/ActionCreators";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Sidebar = ({ genres, isSideBarOpen, toggleSideBar }) => {
  const classes = useStyles();
  const [genreValues, setGenreValue] = useState(genres);

  const container = window.document.body;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={isSideBarOpen}
          onClose={() => {
            toggleSideBar(false);
          }}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {/* insert form component here */}
          <FilterForm />
        </Drawer>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSideBarOpen: state.isSideBarOpen, genres: state.genres };
};
export default connect(mapStateToProps, { toggleSideBar })(Sidebar);
