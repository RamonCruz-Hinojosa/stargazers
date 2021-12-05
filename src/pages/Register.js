import axios from "axios";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/register/Form";

const Register = () => {
  let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    axios
      .post("http://localhost:4200/user", { username, password })
      .then((req) => {
        navigate("/dashboard");
      });
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default Register;
