import React from "react";
import { render } from "react-dom";
import App from "./App";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
import "./index.css";

render(
  // wraps the <App /> in a data layer
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById("root")
);
