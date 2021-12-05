import React from "react";
import { Routes, Route } from "react-router";
// Write component imports here //
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

// Start Router function here //

const Router = () => {
  return (
    <Routes>
      <Route exact path="register" element={<Register />} />
      <Route exact path="dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Router;
