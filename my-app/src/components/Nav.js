import React from "react";
import { NavLink } from "react-router-dom";

function Nav({}) {
  return (
    // <Container>
    //   <Navbar.Brand href="/">Home</Navbar.Brand>
    //   <Navbar.Brand href="/about">About</Navbar.Brand>
    //   <Navbar.Brand href="/restaurants">Restaurants</Navbar.Brand>
    //   <Navbar.Brand href="/signin">Sign In</Navbar.Brand>
    //   <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
    <nav>
      <NavLink exact to="/">
        Home{" "}
      </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/signin">Sign In </NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
    // </Container>
  );
}
export default Nav;
