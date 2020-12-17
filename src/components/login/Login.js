import React from "react";

import { loginURL } from "../../spotify";

import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify__logo"
      />

      <a href={loginURL}>LOGIN TO SPOTIPHY</a>
    </div>
  );
}
