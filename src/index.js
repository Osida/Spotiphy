import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DataLayer } from "./DataLayer";
import reducer, { initialValue } from "./reducer";

import "./index.css";

ReactDOM.render(
  <DataLayer initialValue={initialValue} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById("root")
);
