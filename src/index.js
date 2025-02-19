import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/helpers.css";
import "./styles/defaults.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  // </React.StrictMode>
);
