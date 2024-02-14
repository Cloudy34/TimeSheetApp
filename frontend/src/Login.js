/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

//techy web dev - 24.10
// things to imporve-- this all should be in the sign in page...
function Login() {
  const history = useNavigate();
  const navigate = useNavigate();
  //const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    // Check if email or password is missing
    if (!username || !password) {
      alert("Please enter both email and password");
      return;
    }

    // Make POST request to server for login
    axios
      .post("http://localhost:8000/", {
        username,
        password,
      })

      .then((res) => {
        const { data } = res; // Destructure the response data
        console.log("data: ", res);
        if (data === "exist") {
         
          history("/home", { state: { id: username } });
         
        } else if (data === "notexist") {
          alert("Incorrect email or password");
        } else if (data === "incorrectpassword") {
          alert("Incorrect password");
        } else {
          alert("Error ");
        }
      })

      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Error");
      });
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
        <p>OR</p>
        <Link className="sign" to="/signup">
          Signup Page
        </Link>
      </div>
    </div>
  );
}

export default Login;
//How To Manage User Roles In Node.js - web dev simplified
