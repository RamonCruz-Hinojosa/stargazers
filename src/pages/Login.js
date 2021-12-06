import axios from "axios";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/login/Form";

const Login = () => {
  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    axios
      .post("http://localhost:4200/login", { username, password })
      .then((req) => {
        navigate("/dashboard", { state: { user: req.data.data } });
      });
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default Login;
