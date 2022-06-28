import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MainContextProvider } from "./context/MainContextProvider";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <ReactNotifications />
    <App />
  </MainContextProvider>
);
