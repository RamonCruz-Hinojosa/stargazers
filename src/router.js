import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

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
