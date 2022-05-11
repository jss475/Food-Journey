import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logout from "./Logout";

function NavbarComponent({}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="nav">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/about">About</Navbar.Brand>
        <Navbar.Brand href="/restaurants">Restaurants</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Brand href="/signin">Sign In</Navbar.Brand>
          <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
        </Nav>
        {/* <nav>
        <NavLink exact to="/">
          Home{" "}
        </NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/restaurants">Restaurants</NavLink>
        <NavLink to="/signin">Sign In </NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav> */}
        <Logout />
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
