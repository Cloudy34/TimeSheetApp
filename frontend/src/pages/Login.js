import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch hook
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { login } from "store/Authentication/actions";

function Login() {
  const history = useNavigate();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => ({
    error: state.authReducer?.error,
  }));
  console.log("error: ", error);

  async function submit(e) {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    try {
      // Dispatch login action with username and password

      const response = await dispatch(login({ username, password }, navigate));

      if (response && response.payload && response.payload.error) {
        const errorMessage = response.payload.error;
        console.log("Error Message", errorMessage);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="login-header">Login</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="or">OR</p>
        <Link className="sign" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
