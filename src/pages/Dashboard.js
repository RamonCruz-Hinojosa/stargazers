import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Chatbox from "../components/dashboard/Chatbox";
import Chatposts from "../components/dashboard/Chatposts";
import Currentastro from "../components/dashboard/Currentastro";
import Currentweather from "../components/dashboard/Currentweather";

require("dotenv").config();
const keys = process.env.REACT_APP_API_KEY;

const Dashboard = () => {
  const [post, setPost] = useState([]);
  const [text, setText] = useState("");
  const [weather, setWeather] = useState({});
  const [astro, setAstro] = useState({});
  const location = useLocation();

  let navigate = useNavigate();

  useEffect(() => {
    if (!location?.state?.user) {
      navigate("/");
      return;
    }
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOST}/post`)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${e.target.elements.city.value}&aqi=yes`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  };

  const handleAstro = (e) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const now = `${year}-${month}-${day}`;
    console.log(year, month, day);
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_API_KEY}&q=Austin&dt=${now}`
      )
      .then((res) => {
        console.log(res.data);
        setAstro(res.data);
      });
  };

  const handlePost = (e) => {
    setText(e.target.value);
  };

  const submitPost = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      console.log("location here", location.state);
      e.preventDefault();
      axios
        .post(`${process.env.REACT_APP_SERVER_HOST}/post`, {
          post: text,
          author: location.state.user.username,
        })
        .then((res) => {
          setText("");
          setPost((arr) => [res.data.data, ...arr]);
        });
      console.log("sent");
    }
  };

  return (
    <div className="bigrid">
      <Chatbox text={text} handlePost={handlePost} submitPost={submitPost} />
      <Chatposts post={post} />
      <div className="area">
        <Currentweather weather={weather} handleSubmit={handleSubmit} />
        <Currentastro astro={astro} handleAstro={handleAstro} />
      </div>
    </div>
  );
};

export default Dashboard;
