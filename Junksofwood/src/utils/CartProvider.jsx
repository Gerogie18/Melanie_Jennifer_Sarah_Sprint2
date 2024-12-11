import { useState, createContext, useEffect } from 'react';
import addItemSound from '/assets/sounds/navigation_selection-complete-celebration.ogg';
import clearCartSound from '/assets/sounds/ui_tap-variant-01.ogg';
import cartUpdateSound from '/assets/sounds/ui_refresh-feed.ogg';
import { BsCart, BsCartFill } from "react-icons/bs";
import PropTypes from 'prop-types';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //setting up the cart icon
  const cartisEmpty = cart.length === 0;
  const [cartIcon, setCartIcon] = useState(cartisEmpty ? <BsCart /> : <BsCartFill />)
  const cartLength = cart.length;
  console.log(cartLength)
  
  useEffect(() => {
    (cartisEmpty ? console.log("Cart is Empty") : console.log("Cart is not Empty"))
    setCartIcon(cartisEmpty ? <BsCart /> : <BsCartFill />)
  }, [cartisEmpty])

  const productInCart = (productId) => {
    return cart.find((item) => item.id === productId);
  };

  //testing:
  useEffect(() => {
    console.log('Testing: change to cart')
    console.log(JSON.stringify(cart, null, 2));
  }, [cart])

  // Fetch cart upon reload
  const fetchCart = async () => {
    const res = await fetch("http://localhost:5005/cart");
    const data = await res.json();
    setCart(data);
    return data;
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const clearCart = async () => {
    try {
      const response = await fetch("http://localhost:5005/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Cart cleared successfully");
      new Audio(clearCartSound).play();
      setCart([]); // Set the cart to an empty array
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const addToCart = async (id, quantity=1, name, price, img) => {
    try {
      const response = await fetch("http://localhost:5005/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, quantity, name, price, img }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedCart = await response.json();
      setCart(updatedCart);
      new Audio(addItemSound).play();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateQuantity = async (id, quantity) => {
    const index = cart.findIndex((item) => item.id === id);
    try {
      const response = await fetch(`http://localhost:5005/cart/${index}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedCart = await response.json();
      setCart(updatedCart);
      new Audio(cartUpdateSound).play();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async (id) => {
    const index = cart.findIndex((item) => item.id === id);
    try {
      const response = await fetch(`http://localhost:5005/cart/${index}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedCart = await response.json();
      setCart(updatedCart);
      new Audio(clearCartSound).play();
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const finalizeCart = async (orderNumber, date) => {
    try {
      const response = await fetch("http://localhost:5005/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber, date, cart }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      clearCart();
      console.log("Order finalized successfully");
      
    } catch (error) {
      console.error("Error finalizing order:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartLength, productInCart, fetchCart, clearCart, addToCart, updateQuantity, removeFromCart, finalizeCart, cartIcon }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };