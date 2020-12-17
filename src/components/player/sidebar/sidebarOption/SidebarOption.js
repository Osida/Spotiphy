import React from "react";

import "./SidebarOption.css";

export default function SidebarOption({ option = "test", Icon }) {
  return (
    <div className="sideBarOption">
      {Icon && <Icon className="sideBarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}
