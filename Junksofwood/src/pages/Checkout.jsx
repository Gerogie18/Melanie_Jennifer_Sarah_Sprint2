import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContents from "../components/cartcomponents/CartContents.jsx";
import CheckoutShippingForm from "../components/checkoutcomponents/CheckoutShippingForm.jsx";
import CheckoutBillingForm from "../components/checkoutcomponents/CheckoutBillingForm.jsx";
import CheckoutFinal from "../components/checkoutcomponents/CheckoutFinal.jsx";
import { CartContext } from "../utils/CartProvider.jsx";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft , FaAngleRight} from "react-icons/fa";

const Checkout = () => {
  const { submitCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [leftButtonEnabled, setLeftButtonEnabled] = useState(true);
  const [rightButtonEnabled, setRightButtonEnabled] = useState(false); // Initially disabled until form is submitted

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
    { id: 0, content: <CheckoutShippingForm onSubmit={handleShippingSubmit} /> },
    { id: 1, content: <CheckoutBillingForm onSubmit={handleBillingSubmit} shippingData={shippingData}/> },
    { id: 2, content: <CheckoutFinal address={shippingData} personal={billingData} /> },
  ];

  useEffect(() => {
    if (submitCart) { 
      navigate('/purchasecomplete');
    }
  }, [submitCart, navigate]);

  const handleNext = () => {
    if (rightButtonEnabled) {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setRightButtonEnabled(false);
    }
  };

  const handleBack = () => {
    if (leftButtonEnabled) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setRightButtonEnabled(true);
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
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div>
      <CartContents />
      
      <div>
        <div className='slide-div'>
          <AnimatePresence custom={current}>
            <motion.div
              key={slides[current].id}
              custom={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
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
      </div>
      
      {submitCart && <CheckoutLoading />}
    </div>
  );
};

export default Checkout;