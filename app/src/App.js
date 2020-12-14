import React, { useState, useEffect } from "react";
import Login from "./Login";
import Player from "./Player";
import "./App.css";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// creates an instance of spotify - allows to communicate back & forth with spotify
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      console.log("We have the token ladies and gentlemen");
      // gives access token to spotify api
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          console.log("user is = ", user);
        })
        .catch((e) => {
          console.log("error in getting user = ", e);
        });
    }
  }, []);

  return (
    // BEM convention "app" (lowercase)
    <div className="app">
      {token ? <Player /> : <Login />}
      {process.env.NODE_ENV === "development"
        ? console.log(process.env.REACT_APP_DEV_MODE)
        : console.log(process.env.REACT_APP_PRO_MODE)}
    </div>
  );
}

export default App;
