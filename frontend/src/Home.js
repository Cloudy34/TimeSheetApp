import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


// <h1> Hello {location.state.id} and welcome to the home</h1>

function Home() {
  const location = useLocation();

  return (
    <div>
      <h1 className="head">
      
        Hello {location.state.id} and welcome to the home
      </h1>
    </div>
  );
}

export default Home;
