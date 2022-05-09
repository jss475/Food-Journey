import logo from "../logo.svg";
import "../App.css";
import About from "./About";
import Nav from "./Nav";
import RestaurantTile from "./RestaurantTile";
import RestaurantList from "./RestaurantList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/restaurants">
          <RestaurantList />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
