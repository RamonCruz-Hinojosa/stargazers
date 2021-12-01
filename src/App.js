import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=3e4f925442a1460797d180312213011&q=Austin&aqi=no"
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

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
