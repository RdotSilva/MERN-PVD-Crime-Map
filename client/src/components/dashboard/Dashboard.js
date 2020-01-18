import React, { useEffect, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Copyright from "./../layout/Copyright";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserProfile } from "./../../actions/profile";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // User Profile data from profile state
  const isLoading = useSelector(state => state.profile.loading);
  const profile = useSelector(state => state.profile.profile);

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          {profile !== null ? (
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                PVD Crime Map
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Welcome {profile.data.user.name}
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="textSecondary"
                paragraph
              >
                Select "Crime List" to view a list of recent crimes in
                Providence. Select "Crime Map" to see a map view of recent
                crimes in Providence.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Link
                        color="inherit"
                        component={RouterLink}
                        to="/crimelist"
                      >
                        Crime List
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      <Link
                        color="inherit"
                        component={RouterLink}
                        to="/crimemap"
                      >
                        Crime Map
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          ) : (
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                PVD Crime Map
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Please create a profile to access the local Crime Map for your
                neighborhood.
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Link
                        color="inherit"
                        component={RouterLink}
                        to="/createprofile"
                      >
                        Create Profile
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          )}
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          PVD Crime Map
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Stay Informed
        </Typography>
        <Copyright />
      </footer>
    </Fragment>
  );
};

export default Dashboard;
