import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserLoggedInProvider } from "./context/UserLoggedIn";
import { AllRestaurantsProvider } from "./context/AllRestaurants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllRestaurantsProvider>
  <UserLoggedInProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserLoggedInProvider>
  </AllRestaurantsProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
