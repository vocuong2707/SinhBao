import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LogsPage from "../pages/logsPage/logs";
import HomePage from "../pages/homePage/homePage";
import Verify from "../components/verify/verify";
import { useAuth } from "../provider/authContext";

const MyRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated() ? <Navigate to="/home" /> : <LogsPage />}
      />
      <Route
        path="/home"
        element={isAuthenticated() ? <HomePage /> : <Navigate to="/" />}
      />
      <Route
        path="/verify"
        element={isAuthenticated() ? <Navigate to="/home" /> : <Verify />}
      />
    </Routes>
  );
};

export default MyRoutes;
