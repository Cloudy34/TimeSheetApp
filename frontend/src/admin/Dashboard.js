import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Profile } from "store/Authentication/actions";

function Dashboard() {
  const location = useLocation();
  const dispatch = useDispatch();

  // Select the user object from the Redux store state
  const { user } = useSelector((state) => ({
    user: state.rootReducer.auth.user,
  }));

  useEffect(() => {
    // Dispatch the Profile action
    dispatch(Profile());
  }, [dispatch]);
  // Render the Dashboard component
  return (
    <div>
      <div className="admin"></div>
      <h1 className="head">
        {user
          ? // Display the welcome message with the user's full name if available
            `Hello and welcome to the Admin Dashboard, ${user.fullname}`
          : // Display a generic welcome message if user data is not available
            "Hello and welcome to the Admin Dashboard"}
      </h1>
      {user && (
        <div>
          {/* Display user profile information */}
          <p>Username: {user.username}</p>
          <p>Full Name: {user.fullname}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
