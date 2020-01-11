import React, { Fragment, useEffect } from "react";
import CrimeCard from "./CrimeCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCrimeData } from "./../../actions/crime";

const CrimeList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.crime.loading);
  const crimes = useSelector(state => state.crime.crimes);

  useEffect(() => {
    dispatch(fetchCrimeData());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {" "}
        <Fragment>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            crimes.map((crime, index) => (
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <CrimeCard key={index} crime={crime}></CrimeCard>
                </Paper>
              </Grid>
            ))
          )}
        </Fragment>
      </Grid>
    </div>
  );
};

export default CrimeList;
