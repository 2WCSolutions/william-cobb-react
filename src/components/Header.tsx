import React from 'react';
import logoImage from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" className="text-white text-center p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logoImage} alt="WC Logo" className="logo-image mr-2" />
          William W Cobb III
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/work">Work</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="ml-auto d-flex align-items-stretch">
            <a href="https://www.facebook.com/BuddyCobb" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/buddycobb/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/williamcobbiii/" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.twitter.com/WilliamCobb" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
