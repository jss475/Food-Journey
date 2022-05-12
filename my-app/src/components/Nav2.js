import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Navbar, Nav} from 'react-bootstrap'

function Nav2() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">MyFoodJourney</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Item>
              <Nav.Link href="/about" >About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/restaurants">Restaurants</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
       
        {/* <nav>
          <NavLink exact to="/">
            Home{" "}
          </NavLink>
          <NavLink to="/about">About </NavLink>
          <NavLink to="/restaurants">Restaurants</NavLink>
          <NavLink to="/signin">Sign In </NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav> */}
      </Container>

    </Navbar>


  );
}
export default Nav2;
