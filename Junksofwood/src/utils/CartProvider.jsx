import { useState, createContext, useEffect } from 'react';
import addItemSound from '../assets/sounds/navigation_selection-complete-celebration.ogg';
import clearCartSound from '../assets/sounds/ui_tap-varient-01.ogg';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //testing:
  useEffect(() => {
    console.log(cart)
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
      setCart([]);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Cart cleared successfully");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const addToCart = async (id, quantity, name, price, img) => {
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
    try {
      const response = await fetch(`http://localhost:5005/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async ({id}) => {
    try {
      const response = await fetch(`http://localhost:5005/cart/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      new Audio(clearCartSound).play();
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing from cart:", error);
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

      console.log("Order finalized successfully");
      clearCart(); // Optionally clear the cart after finalizing the order
    } catch (error) {
      console.error("Error finalizing order:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, fetchCart, clearCart, addToCart, updateQuantity, removeFromCart, finalizeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext, CartProvider };