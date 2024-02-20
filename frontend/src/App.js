// import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup";
import AdminDashboard from "./admin/Dashboard";
import ManagerDashboard from "./managers/Dashboard";
import EmployeeDashboard from "./employee/Dashboard";
import { useMemo } from "react";
import Layout from "admin/Layout.js";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
{/* ROUTE for Dashboard pagers of admin manager and employee */}

            <Route element={<Layout />}>
              <Route element={<Navigate to="admin/dashboard" replace />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/managers/dashboard"
                element={<ManagerDashboard />}
              />
              <Route
                path="/employee/dashboard"
                element={<EmployeeDashboard />}
              />
            </Route>
          </Routes>
{/* ROUTE for login and sign up */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
// lunch break --- dashboard - admin dahsboard edroh - 44.05
// 47:33 Solved the App.js Routing issue, Created first components, navbar and implementation is decent- working
// side bar remaining... to be done today 19th feb...
