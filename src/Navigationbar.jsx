import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

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
            <Nav.Link href="#" className="mx-4">Start</Nav.Link>
            <Nav.Link href="#" className="mx-4">Book</Nav.Link>
            <Nav.Link href="#" className="mx-4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
