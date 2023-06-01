import './index.css';
import './App.css'
import Main from './components/Main';
import NavBar from './components/Navbar';
import CartProvider from './CartContext';
import React from "react";
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
          <NavBar />
          <Main />
          <Footer />
    </CartProvider>
  );
}

export default App;
