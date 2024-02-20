/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

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

    try {
      // Make POST request to server for login
      const response = await axios.post("http://localhost:8000/", {
        username,
        password,
      });

      // Destructure the response data
      const { data } = response;

      if (data.status === "success") {
        // Assuming the role information is included in the response data
        const role = data.user.role;
        // console.log("Role:", role);
        if (role === "admin") {
          navigate("/admin/dashboard", { state: { id: username } });
        } else if (role === "manager") {
          navigate("/manager/dashboard", { state: { id: username } });
        } else if (role === "employee") {
          navigate("/employee/dashboard", { state: { id: username } });
        } else {
          alert("Unknown role");
        }
      } else if (data === "notexist") {
        alert("Incorrect email or password");
      } else if (data === "incorrectpassword") {
        alert("Incorrect password");
      } else {
        alert("Error ");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error");
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
