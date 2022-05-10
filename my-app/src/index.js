import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserLoggedInProvider } from "./context/UserLoggedIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserLoggedInProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserLoggedInProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();