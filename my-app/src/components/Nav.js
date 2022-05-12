import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logout from "./Logout";
import logo from "../smalllogo.gif";

function NavbarComponent({}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="nav">
        <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>  
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/restaurants">Restaurants</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
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
