import React, { useState, useEffect } from "react";
import { Login, Player } from "./components/index";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

// creates an instance of spotify - allows communication back & forth with spotify
const spotify = new SpotifyWebApi();

export default function App() {
  const [urlToken, setUrlToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _urlToken = hash.access_token;

    if (_urlToken) {
      setUrlToken(_urlToken);
      console.log("WE HAVE THE URLTOKEN!!");
      spotify.setAccessToken(_urlToken);
      spotify
        .getMe()
        .then((user) => console.log("The user is =", user))
        .catch((e) => console.log("There was an error getting the user = ", e));
    }
  }, []);

  return (
    <>
      <div className="App">{urlToken ? <Player /> : <Login />}</div>
      {process.env.NODE_ENV === "development"
        ? console.log(process.env.REACT_APP_DEV_MODE)
        : console.log(process.env.REACT_APP_PRO_MODE)}
    </>
  );
}
