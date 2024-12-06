//Breakpoint Context creates a screen context that can be used to make dynamically sized layouts

//Import into another file:
//import React, { useContext } from 'react';
//import BreakpointProvider, { BreakpointContext } from '../utils/BreakpointProvider';

//define your screen size
//const { screensize } = useContext(BreakpointContext);

import { createContext, useState, useEffect } from 'react';

const breakpoints = {
  xs: 480, // extra small
  sm: 768, // small
  md: 992, // medium
  lg: 1200, // large
  xl: 1600, // extra large
};

const getBreakpoint = (width) => {
  if (width <= breakpoints.xs) return 'xs';
  if (width <= breakpoints.sm) return 'sm';
  if (width <= breakpoints.md) return 'md';
  if (width <= breakpoints.lg) return 'lg';
  return 'xl';
};

export const BreakpointContext = createContext();

const BreakpointProvider = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BreakpointContext.Provider value={{ breakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;