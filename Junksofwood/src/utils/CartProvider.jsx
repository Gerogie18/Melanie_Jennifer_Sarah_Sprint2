import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import addItemSound from '/assets/sounds/navigation_selection-complete-celebration.ogg';
import clearCartSound from '/assets/sounds/ui_tap-variant-01.ogg';
import cartUpdateSound from '/assets/sounds/ui_refresh-feed.ogg';
import { BsCart, BsCartFill } from "react-icons/bs";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //for testing
  const [previousCart, setPreviousCart] = useState(cart);
  const [cartChanged, setCartChanged] = useState(false);

  //setting up the cart icon
  const cartisEmpty = cart.length === 0;
  const [cartIcon, setCartIcon] = useState(cartisEmpty ? <BsCart /> : <BsCartFill />)
  const cartLength = cart.length;
  
  useEffect(() => {
    (cartisEmpty ? console.log("Cart is Empty") : console.log("Cart is not Empty"))
    setCartIcon(cartisEmpty ? <BsCart /> : <BsCartFill />)
  }, [cartisEmpty])

  const productInCart = (productId) => {
    console.log(productId);
    return cart.find((item) => item.id === productId) || null;
  };

  //testing:
    useEffect(() => {
      setPreviousCart(cart);
    }, [cart]);
  
    useEffect(() => {
      if (previousCart !== cart) {
        console.log('Testing: change to cart');
        console.log(`Cart Length: ${cart.length}`);
        console.log(JSON.stringify(cart, null, 2));
        //needed for updates to CartDiv
        setCartChanged(true);
        setPreviousCart(cart);
      } else {
        setCartChanged(false);
      }
    }, [cart, previousCart]);

  // Fetch the current cart from the server
  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:5005/cart");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  //only fetch upon initial loading
  useEffect(() => {
    fetchCart();
  }, []);

  // Clear the cart by deleting each item individually
  const clearCart = async () => {
    try {
      // Create an array of DELETE requests for each cart item
      const deletePromises = cart.map(item =>
        fetch(`http://localhost:5005/cart/${item.id}`, {
          method: "DELETE",
        })
      );

      // Wait for all DELETE requests to complete
      const responses = await Promise.all(deletePromises);

      // Check if all DELETE requests were successful
      const allSuccessful = responses.every(response => response.ok);
      if (!allSuccessful) {
        throw new Error('Failed to delete some items from the cart.');
      }

      console.log("Cart cleared successfully");
      new Audio(clearCartSound).play();
      setCart([]); // Update the cart state to an empty array
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  // Add an item to the cart
  const addToCart = async ({ id, quantity, name, price, img }) => {
    try {
      const response = await fetch("http://localhost:5005/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, quantity, name, price, img }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newItem = await response.json();
      setCart([...cart, newItem]);
      new Audio(addItemSound).play();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateQuantity = async ({ id, quantity }) => {
    try {
      // Find the cart item by its unique id
      const cartItem = cart.find(item => item.id === id);
      if (!cartItem) {
        throw new Error(`Cart item with id ${id} not found.`);
      }

      const response = await fetch(`http://localhost:5005/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedItem = await response.json();

      // Update the cart state with the updated item
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: updatedItem.quantity } : item
        )
      );

      new Audio(cartUpdateSound).play();
      console.log(`Quantity for item id ${id} updated to ${quantity}.`);
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert('Failed to update item quantity. Please try again.');
    }
  };

  const removeFromCart = async ( { id } ) => {
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

  const finalizeCart = async ( { orderNumber, date } ) => {
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
    <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;