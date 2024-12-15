import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContents from "../components/cartcomponents/CartContents.jsx";
import CheckoutShippingForm from "../components/checkoutcomponents/CheckoutShippingForm.jsx";
import CheckoutFinal from "../components/checkoutcomponents/CheckoutFinal.jsx";
import { CartContext } from "../utils/CartProvider.jsx";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";

const Checkout = () => {
  const { submitCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // Track navigation direction

  // State to store shipping information
  const [shippingData, setShippingData] = useState({});

  const handleShippingSubmit = (formData) => {
    setShippingData(formData);
    console.log('Shipping Data:', formData); // For debugging
    handleNext();
  };

  const slides = [
    { id: 0, content: <CartContents /> },
    { id: 1, content: <CheckoutShippingForm onSubmit={handleShippingSubmit} /> },
    { id: 2, content: <CheckoutFinal shippingData={shippingData} /> },
  ];

  useEffect(() => {
    if (submitCart) { 
      setTimeout(() => {
        navigate('/');
      }, 60000);
      navigate('/');
    }
  }, [submitCart, navigate]);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setDirection(1); // Moving forward
      setCurrent((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setDirection(-1); // Moving backward
      setCurrent((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className='slide-div'>
      <div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slides[current].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
        
        <div className='slide-buttons'>
          <button onClick={handleBack}>
            <FaAngleLeft />
          </button>
          <button onClick={handleNext}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;