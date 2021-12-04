import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

require("dotenv").config();
const KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      text: "",
    };
  }

  async componentDidMount() {
    axios
      .get(`http://localhost:4200/post`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ post: res.data.data });
        console.log("sdkjfh", this.state.post);
      })
      .catch((error) => {
        console.log(error);
      });
    // try {
    //   const response = await fetch(URL);
    //   const data = await response.json();
    //   console.log("look here", data.hits);
    //   this.setState({
    //     stories: data.hits,
    //   });
    // } catch {
    //   console.error("I have failed");
    // }
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=Austin&aqi=no`
  //     )
  //     .then((res) => {
  //       const currentWeth = res;
  //     });
  // }, []);

  // let send = true;

  // useEffect(() => {
  //   if (send === true) {
  //     console.log("hereherehereherehereherehere");
  //
  //     send = false;
  //   }
  // }, [post, send]);

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.post);
  }

  handlePost = (e) => {
    this.setState({ text: e.target.value });
  };

  submitPost = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      axios
        .post("http://localhost:4200/post", {
          post: this.state.text,
          author: "bs",
        })
        .then((res) =>
          this.setState({
            text: "",
            post: [res.data.data, ...this.state.post],
          })
        );
      console.log("sent");
    }
  };
  // use env file to hide api key, make function to make li items pop up as fake comment posts are fetched from fake data base, make the comment post a sign in only feature, figure out how to
  // make requests for any city. the database side and sql need to be done carefully so i dont get hacked. .env is not good to hide secrets in react secrets are handled on the db side. dont
  // enable github pages until api key and db stuff is safe.

  render() {
    return (
      <div className="bigrid">
        <form>
          <textarea
            placeholder="Your comments here. Remember, be nice!"
            maxLength="500"
            name="post"
            className="comment"
            value={this.state.text}
            onChange={this.handlePost}
            onKeyDown={this.submitPost}
          ></textarea>
        </form>
        <ul>
          {this.state.post.map((p) => (
            <li>{p.post}</li>
          ))}
        </ul>
        <div className="area">
          <form>
            <label>
              City:
              <input type="text" name="city" />
            </label>
            <input type="submit" value="search" onClick={this.handleSubmit} />
          </form>
          <p></p>
        </div>
      </div>
    );
  }
}

export default App;
