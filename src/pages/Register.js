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
    if (username.length <= 5) {
      alert("username too short");
      return;
    }
    if (password.length <= 5) {
      alert("password too short");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_SERVER_HOST}/user`, {
        username,
        password,
      })
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

export default Register;
