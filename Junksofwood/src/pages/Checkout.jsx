import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContents from "../components/cartcomponents/CartContents.jsx";
import CheckoutShippingForm from "../components/checkoutcomponents/CheckoutShippingForm.jsx";
import CheckoutBillingForm from "../components/checkoutcomponents/CheckoutBillingForm.jsx";
import CheckoutFinal from "../components/checkoutcomponents/CheckoutFinal.jsx";
import { CartContext } from "../utils/CartProvider.jsx";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";

const Checkout = () => {
  const { submitCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // Track navigation direction
  const [leftButtonEnabled, setLeftButtonEnabled] = useState(true);
  const [rightButtonEnabled, setRightButtonEnabled] = useState(true); 

  // State to store address and billing information
  const [shippingData, setShippingData] = useState({});
  const [billingData, setBillingData] = useState({});

  const handleShippingSubmit = (formData) => {
    setShippingData(formData);
    setRightButtonEnabled(true);
    handleNext();
  };

  const handleBillingSubmit = (formData) => {
    setBillingData(formData);
    setRightButtonEnabled(true);
    handleNext();
  };

  const slides = [
    { id: 0, content: <CartContents /> }, // CartContents as first slide
    { id: 1, content: <CheckoutShippingForm onSubmit={handleShippingSubmit} /> },
    { id: 2, content: <CheckoutBillingForm onSubmit={handleBillingSubmit} shippingData={shippingData} /> },
    { id: 3, content: <CheckoutFinal shippingData={shippingData} billingData={billingData} /> },
  ];

  useEffect(() => {
    if (submitCart) { 
      navigate('/purchasecomplete');
    }
  }, [submitCart, navigate]);

  const handleNext = () => {
    if (rightButtonEnabled) {
      setDirection(1); // Moving forward
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const handleBack = () => {
    if (leftButtonEnabled) {
      setDirection(-1); // Moving backward
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
    <div>
      <div className='slide-div'>
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
          <button onClick={handleBack} disabled={!leftButtonEnabled}>
            <FaAngleLeft />
          </button>
          <button onClick={handleNext} disabled={!rightButtonEnabled}>
            <FaAngleRight />
          </button>
        </div>
      </div>
      
      {submitCart && <CheckoutLoading />}
    </div>
  );
};

export default Checkout;