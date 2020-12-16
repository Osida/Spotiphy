import React from "react";
import "./Login.css";
import { loginURL } from "../../spotify";
import spotifyLogo from "../../images/spotify-logo.svg";

export default function Login() {
  return (
    <div className="login">
      <img src={spotifyLogo} alt="" />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
