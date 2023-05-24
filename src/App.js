import './App.css';
import Main from './components/Main';
import NavBar from './components/Navbar';
import CartProvider from './CartContext';
import React from "react";

function App() {
  return (
    <CartProvider>
          <NavBar />
          <Main />
    </CartProvider>
  );
}

export default App;
