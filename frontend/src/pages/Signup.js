/* eslint-disable eqeqeq */

// MERN auth-- CyberWolves
//role based access control  dave gray
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { signup } from "store/Authentication/actions";
import { useDispatch } from "react-redux"; // Import useDispatch hook

function Signup() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch(); // Initialize useDispatch hook

  function submit(e) {
    e.preventDefault();

    // Check if email or password is missing
    if (!email || !password || !username || !phone || !fullname) {
      alert("Please enter Username, Email and Password");
      return;
    }

    dispatch(signup({ fullname, username, phone, email, password }, navigate));
  }

  
  return (
    <div className="container">
      <div className="form-container">
        <h1>Sign up</h1>

        <form action="POST" onSubmit={submit}>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              placeholder="Fullname"
              name="fullname"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Phone"
              name="phone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              name="password"
            />
          </div>
          <button className="button2" type="submit">
            Sign in
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>

        <div>
          <p className="or">OR</p>
          <Link className="log" to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
