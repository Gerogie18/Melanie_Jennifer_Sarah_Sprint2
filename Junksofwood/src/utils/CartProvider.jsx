import { useState, useEffect, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //get cart unpon reload
    const fetchCart = async () => {
        const res = await fetch("http://localhost:5005/cart");
        const data = await res.json();
        //console.log(data);
        setCart(data);
        return data;
      };

    const clearCart = async () => {
        try {
          const response = await fetch("http://localhost:5005/cart", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
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
    

    const addToCart = async (id, quantity, name, filepath ) => {
        try {
            const response = await fetch("http://localhost:5005/cart", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ id, quantity, name, filepath})
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const removeFromCart = async (id) => {
        try {
            const response = await fetch(`http://localhost:5005/cart/${id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    };

    const updateQuantity = async (id, quantity) => {
        try {
            const response = await fetch(`http://localhost:5005/cart/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ quantity })
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

    return (
        <CartContext.Provider value={{ cart, fetchCart, addToCart, removeFromCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
export { CartContext, CartProvider };