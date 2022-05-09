import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <nav>
      <NavLink exact to="/">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/signin">Sign In </NavLink>
      <NavLink to="/signup">Sign Up</NavLink>

    </nav>
  );
}
export default Nav;
