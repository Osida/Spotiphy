import React from "react";

import { Body, Sidebar, Footer } from "./index";

import "./Player.css";

export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="play__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer spotify={spotify} />
    </div>
  );
}
