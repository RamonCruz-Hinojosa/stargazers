import React from "react";
import { Link } from "react-router-dom";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input name="username"></input>
      <input name="password"></input>
      <button>submit</button>
      <Link to="/register">register</Link>
    </form>
  );
};

export default Form;
