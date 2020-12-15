import React, { useState, useEffect } from "react";
import { Login, Player } from "./components/index";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

// creates an instance of spotify - allows communication back & forth with spotify
const spotify = new SpotifyWebApi();

export default function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _urlToken = hash.access_token;

    if (_urlToken) {
      dispatch({
        type: "SET_TOKEN",
        token: _urlToken,
      });

      spotify.setAccessToken(_urlToken);

      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: "SET_USER",
            // user: user,
            user,
          });
        })
        .catch((e) => console.log("There was an error getting the user = ", e));
    }
  }, []);

  return (
    <>
      <div className="App">
        {/* can dispatch spotify into the data layer */}
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
      {process.env.NODE_ENV === "development"
        ? console.log(process.env.REACT_APP_DEV_MODE)
        : console.log(process.env.REACT_APP_PRO_MODE)}
    </>
  );
}
