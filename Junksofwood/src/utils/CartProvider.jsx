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

  const [cartTotal, setCartTotal] = useState(0);

  const [submitCart, setSubmitCart] = useState(false);
  
  useEffect(() => {
    (cartisEmpty ? console.log("Cart is Empty") : console.log("Cart is not Empty"))
    setCartIcon(cartisEmpty ? <BsCart /> : <BsCartFill />)
  }, [cartisEmpty])

  const productInCart = (productId) => {
    if (cart.length > 0) {
      console.log('Checking if product is in cart - productId:', productId);
      // Ensure productId is of the same type as item.id (e.g., Number)
      return cart.find((item) => item.id === productId) || null;
    } else {
      return null;
    }
  };

  //testing:
    useEffect(() => {
      setPreviousCart(cart);
    }, [cart]);
  
     useEffect(() => {
       if (previousCart !== cart) {
         //console.log('Testing: change to cart');
         //console.log(`Cart Length: ${cart.length}`);
         //console.log(JSON.stringify(cart, null, 2));
      //needed for updates to CartDiv
        setCartChanged(true);
        setPreviousCart(cart);
      //needed for cartTotal
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(totalPrice);
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
      submitCart && setSubmitCart(false);
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

  const removeFromCart = async ({ id }) => {
    try {
      const response = await fetch(`http://localhost:5005/cart/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedCart = await response.json();
      if (cartLength !== 1) {
        setCart(updatedCart);
      } else {
        setCart([]);
      }
      new Audio(clearCartSound).play();
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const updateStockQuantity = async (cart) => {
    try {
      // Loop through each item in the cart
      for (const item of cart) {
        // Construct the API endpoint URL
        const url = `http://localhost:5005/stock/${item.id}`;
  
        // Set the request headers
        const headers = {
          'Content-Type': 'application/json'
        };
  
        // Calculate the new stock quantity
        const newQuantity = item.stockQTY - item.quantity;
  
        // Set the request body
        const body = JSON.stringify({ stockQTY: newQuantity });
  
        // Send the PATCH request
        const response = await fetch(url, {
          method: 'PATCH',
          headers,
          body
        });
  
        // Check if the response was successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
    } catch (error) {
      console.error('Error updating stock quantity:', error);
    }
  };
  
  const finalizeCart = async ({ orderNumber, date, shippingData }) => {
    try {
      // Update the stock quantity
      await updateStockQuantity(cart);
  
      // Create a new order
      const response = await fetch("http://localhost:5005/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber, date, cartTotal, cart, shippingData }),
      });
  
      // Check if the response was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Clear the cart
      clearCart();
  
      // Set submitCart to true
      setSubmitCart(true);
      new Audio(clearCartSound).play();
      console.log("Order finalized successfully");
    } catch (error) {
      console.error("Error finalizing order:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartLength, cartIcon, cartChanged, submitCart, cartTotal, productInCart, setCart, clearCart, addToCart, removeFromCart, updateQuantity, finalizeCart}}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;