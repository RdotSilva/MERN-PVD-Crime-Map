import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCrimeData } from "./../../actions/crime";

const CrimeList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.crime.loading);
  return <div></div>;
};

export default CrimeList;
