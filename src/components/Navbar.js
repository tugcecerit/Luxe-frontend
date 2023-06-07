import React, { useState, useContext } from 'react';
import { Nav, Navbar, Container, Modal } from 'react-bootstrap'
import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import Checkout from './Checkout';
import Logo from '../img/logo.png'

function NavBar() {
  const cart = useContext(CartContext)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
    <Navbar
      className="nav navbar-custom"
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="transparent"
    >
      <Container className={isNavbarOpen ? 'container-open' : ''}>
        <Navbar.Brand href="/"><img src={Logo} alt={Logo} style={{ width: '100px', height: '60px' }} /></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/testimonials">TESTIMONIALS</Nav.Link>
            <Nav.Link href="/store">SHOP</Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
          <Nav className="profile">
          <Nav.Link eventKey={2}  href="#" className='navbar-button'>
              <Profile fontSize="16px" />
            </Nav.Link>
          <button className="cart" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            <text x="5.6" y="12.5" fill="rgb(210, 210, 210)" fontSize="8">{productsCount}</text>
            </svg>
            </button>
            <Nav.Link eventKey={2} href="#" className='navbar-button'>
              <LoginButton />
              <LogoutButton />   
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style jsx="true">{`
        .navbar-custom {
          background-color: rgb(0, 0, 0, 0.4)!important;
          position: fixed;
          top: 0;
          color: rgb(210, 210, 210)!important;
          width: 100%;
          z-index: 1000;
          backdrop-filter: blur(30px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
          font-weight: 900;
        }
        .container-open {
          background-color: rgba(0, 0, 0, 0.9);
          min-width: 250px;
          border-radius: 5px;
        }
        .me-auto, .navbar-button {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .cart {
            padding-bottom: 20px;
            background: none;
            border: none;
            color: rgb(210, 210, 210)!important;
            margin-top: 5px;
        }
        .profile {
            margin-top: 20px;
          }
        .me-auto .nav-link:hover {
          color: gray!important ;
        }
      `}</style>
      <Modal show={show} onHide={handleClose} style={{ fontSize: "25px", fontFamily: "Teko" }}>
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "25px" }}>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {productsCount > 0 ?
                <>
                <p className='cart-p'>Items in your cart:</p>
                {cart.items.map((currentProduct, idx) => (
                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
                ))}
                <h1 className='cart-p'>Total: {cart.getTotalCost().toFixed(2)}</h1>
                <Checkout />
                </>
                :
                <h1 className='cart-p'>There are no items in your cart!</h1>}
            </Modal.Body>
      </Modal>
    </Navbar>
    </>
  );
}

export default NavBar;

