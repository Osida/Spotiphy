import React, { useEffect } from "react";

import { Login, Player } from "./components/index";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// import "./App.css";

// creates a spotify instance (allows us to comm. w/ spotify back & forth)
const s = new SpotifyWebApi();

function App() {
  // how we grab something from the data layer
  // {} => what we want from the data layer
  // dispatch => how we update the data layer
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromURL();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcFaQKLML4MRy").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <>
      <div className="app">
        {!token && <Login />}
        {token && <Player spotify={s} />}
      </div>
      {process.env.NODE_ENV === "development"
        ? console.log(process.env.REACT_APP_DEV_MODE)
        : console.log(process.env.REACT_APP_PRO_MODE)}
    </>
  );
}

export default App;
