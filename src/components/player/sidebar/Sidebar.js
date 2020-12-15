import React from "react";
import "./Sidebar.css";
// import sidebar__logo from "../../../images/spotify-logo.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
    </div>
  );
}
