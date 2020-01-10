import React, { Fragment, useEffect } from "react";

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
    <Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        crimes.map((crime, index) => <div key={index}>{crime.casenumber}</div>)
      )}
    </Fragment>
  );
};

export default CrimeList;
