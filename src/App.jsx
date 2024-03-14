import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cart from './pages/Cart.jsx';
import Main from './pages/Main.jsx';
import Home from './pages/Products.jsx';
import Login from "./components/Login.jsx";
import Register from "./pages/Register.jsx";
import CartContext from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
    return () => {
      console.log('Component unmounted');
    };
  }, [cartItems]);

  return (
    <AuthProvider>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </CartContext.Provider>
    </AuthProvider>
  )
}

export default App;
