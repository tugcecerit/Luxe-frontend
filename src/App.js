import './App.css';
import Main from './components/Main';
import NavBar from './components/Navbar';
// import CartProvider from './CartContext';
import React from "react";
import Footer from './components/Footer';

function App() {
  return (

    <div className='App'>
          <NavBar />
          <Main />
          <Footer />
          </div>

  );
}

export default App;
