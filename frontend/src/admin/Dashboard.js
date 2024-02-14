import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();

  return (
    <div>
      <div className="admin"> </div>
         <h1 className="head">  Hello {location.state.id} and welcome</h1> 
    </div>
  );
}

export default Dashboard;
//Build a MERN React Admin Dashboard | Redux Toolkit Query, Backend Focus, Deployment, Data Modeling
// start from dashboard integration  - EdRoh 
// data intergration... -- create the database structure,and also admin dashboard. 
