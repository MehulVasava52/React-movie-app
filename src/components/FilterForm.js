import { Formik, Form, Field, ErrorMessage } from "formik";
import { filterMovies, toggleSideBar } from "../actions/ActionCreators";
import { connect } from "react-redux";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";

// Other filters: Trending, avg vote count gt, avg runtime gt
const FilterForm = ({ genres, filterMovies, toggleSideBar }) => (
  <Formik
    initialValues={{ selectedGenres: [] }}
    onSubmit={({ selectedGenres }, { setSubmitting }) => {
      filterMovies(selectedGenres.join(","));
      setSubmitting(false);
      toggleSideBar();
    }}
    onReset={() => {
      toggleSideBar();
    }}
  >
    {({ values }) => (
      <Form>
        <List>
          {genres.length
            ? genres.map((genre, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Field
                      type="checkbox"
                      name="selectedGenres"
                      value={`${genre.id}`}
                    />
                  </ListItemIcon>
                  <ListItemText>{genre.name}</ListItemText>
                </ListItem>
              ))
            : ""}
        </List>
        <Divider />

        <Button color="primary" type="submit">
          Set Filter
        </Button>
        <Button color="secondary" type="reset">
          Clear Filter
        </Button>
      </Form>
    )}
  </Formik>
);

const mapStateToProps = (state) => {
  return {
    genres: state.genres
  };
};
export default connect(mapStateToProps, { filterMovies, toggleSideBar })(
  FilterForm
);
