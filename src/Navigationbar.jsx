import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>Feature Flicks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="ml-auto">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <NavLink to="/" className="mx-4">Start</NavLink>
            <NavLink to="/book" className="mx-4">Book</NavLink>
            <NavLink to="/about" className="mx-4">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
