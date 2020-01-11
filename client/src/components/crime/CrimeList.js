import React, { Fragment, useEffect } from "react";
import CrimeCard from "./CrimeCard";

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

  // TODO: For now return casenumber to demo.
  // In future create a card and return the card with the data.
  return (
    <Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        crimes.map((crime, index) => (
          <CrimeCard key={index} crime={crime}></CrimeCard>
        ))
      )}
    </Fragment>
  );
};

export default CrimeList;
