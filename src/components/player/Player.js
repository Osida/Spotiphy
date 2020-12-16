import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import "./Player.css";

export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  );
}
