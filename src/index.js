import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App as AppCounter } from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppCounter />
  </React.StrictMode>
);
