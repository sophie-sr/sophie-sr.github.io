// header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import necessary components from React Bootstrap
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import './header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo or Brand */}
          <Navbar.Brand as={Link} to="/">PaperSora</Navbar.Brand>
          
          {/* Navbar links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link> {/* Replace href with Link */}
              <Nav.Link as={Link} to="/meettheartist">Meet the Artists</Nav.Link> {/* Link to Meet the Artist */}
              <Nav.Link as={Link} to="/commission">Commissions</Nav.Link> {/* Replace href with Link */}
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link> {/* Replace href with Link */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;