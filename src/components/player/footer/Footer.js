import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album & song details</p>
      </div>
      <div className="footer__center">
        <p>Player controls</p>
      </div>
      <div className="footer__right">
        <p>Volume</p>
      </div>
    </div>
  );
}
