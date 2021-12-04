import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

require("dotenv").config();
const KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [current, changeCurrent] = useState("search weather here");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=Austin&aqi=no`
      )
      .then((res) => {
        const currentWeth = res;
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log();
  }

  const handleChange = (e) => {
    console.log(e);
  };
  // use env file to hide api key, make function to make li items pop up as fake comment posts are fetched from fake data base, make the comment post a sign in only feature, figure out how to
  // make requests for any city. the database side and sql need to be done carefully so i dont get hacked. .env is not good to hide secrets in react secrets are handled on the db side. dont
  // enable github pages until api key and db stuff is safe.

  return (
    <div className="bigrid">
      <textarea
        placeholder="Your comments here. Remember, be nice!"
        maxLength="500"
        name="comments"
        className="comment"
      ></textarea>
      <ul>
        <li>bs</li>
        <li>bs</li>
        <li>bs</li>
        <li>bs</li>
        <li>bs</li>
        <li>bs</li>
        <li>bs</li>
        <li>bs</li>
      </ul>
      <div className="area">
        <form>
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <input type="submit" value="search" onClick={handleSubmit} />
        </form>
        <p>{current}</p>
      </div>
    </div>
  );
}

export default App;
