import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get(
        "api.openweathermap.org/data/2.5/weather?zip=78736,us&appid=3772097231055e1aad10b35fd81157ab"
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
