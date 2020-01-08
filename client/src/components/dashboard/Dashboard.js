import React from "react";

// Redux
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userData = useSelector(state => state.auth.user);
  const userName = userData.data.name;
  return <div>Welcome {userName}</div>;
};

export default Dashboard;
