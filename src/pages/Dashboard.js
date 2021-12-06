import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

require("dotenv").config();
const keys = process.env.REACT_APP_API_KEY;

const Dashboard = () => {
  const [post, setPost] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState({});
  const [weather, setWeather] = useState("test");
  const location = useLocation();

  // need weather state in p element

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
        `http://api.weatherapi.com/v1/current.json?key=3e4f925442a1460797d180312213011&q=Austin&aqi=no`
      )
      .then((res) => {
        console.log(keys);
        // setWeather(res.data.data);
      });
  };

  //  needs to call to weather api using e.target.elemets.city.value
  // return data to weather state and display in div
  //you can log in with incorrect credentials but if you try to post a comment the page will error out!!!
  const handlePost = (e) => {
    setText(e.target.value);
  };

  const submitPost = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
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
  // use env file to hide api key, make function to make li items pop up as fake comment posts are fetched from fake data base, make the comment post a sign in only feature, figure out how to
  // make requests for any city. the database side and sql need to be done carefully so i dont get hacked. .env is not good to hide secrets in react secrets are handled on the db side. dont
  // enable github pages until api key and db stuff is safe.

  return (
    <div className="bigrid">
      <form>
        <textarea
          placeholder="Your comments here. Remember, be nice!"
          maxLength="500"
          name="post"
          className="comment"
          value={text}
          onChange={handlePost}
          onKeyDown={submitPost}
        ></textarea>
      </form>
      <ul>
        {post.map((p) => (
          <li>
            {p.author}:{p.post}
          </li>
        ))}
      </ul>
      <div className="area">
        <form onClick={handleSubmit}>
          <label>
            Zip Code:
            <input type="text" name="city" />
          </label>
          <input type="submit" value="search" />
        </form>
        <p>{weather}</p>
      </div>
    </div>
  );
};

export default Dashboard;
