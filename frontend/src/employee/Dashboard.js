import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  console.log("data dashboard: ", location);

  return (
    <div>
      <h1 className="head"> Hello {location.state?.id} and welcome</h1>
    </div>
  );
}

export default Dashboard;
