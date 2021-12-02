import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";

require("dotenv").config();
const KEY = process.env.REACT_APP_API_KEY;

function App() {
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=Austin&aqi=no`
      )
      .then((res) => {
        console.log(res);
      });
  }, []);
  // use env file to hide api key, make function to make li items pop up as fake comment posts are fetched from fake data base, make the comment post a sign in only feature, figure out how to
  // make requests for any city. the database side and sql need to be done carefully so i dont get hacked

  return (
    <div className="bigrid">
      <textarea
        placeholder="Your comments here. Remember, be nice!"
        maxLength="500"
        name="comments"
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
      <div className="area">placegolder</div>
    </div>
  );
}

export default App;
