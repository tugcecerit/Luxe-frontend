import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar
      className="nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className={isNavbarOpen ? 'container-open' : ''}>
        <Navbar.Brand href="/">LUXE</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="profile">
            <Nav.Link eventKey={2} href="#">
              <Profile fontSize="16px" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#" className='navbar-button'>
              <LoginButton />
              <LogoutButton />   
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style jsx>{`
        .container-open {
          background-color: rgba(0, 0, 0, 0.8);
          border-radius: 5px;
        }
        .profile {
            padding-top: 20px;
        }
        .navbar-button {
            padding: 10px;
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;

