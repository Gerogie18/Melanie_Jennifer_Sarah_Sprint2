//BreakpointProvider handles screen size changes to make layout consistent and dynamic

//To Use:
    //Import
    //import { BreakpointContext } from './BreakpointProvider';

    //define
    //const { breakpoint } = useContext(BreakpointContext);
    //breakpoint = xs, sm, md,lg, or xl depending on screen size

    //can code different context and configuration for screen size changes

import { useState, useEffect } from 'react';

const breakpoints = {
    xs: 480, // extra small
    sm: 768, // small
    md: 992, // medium
    lg: 1200, // large
    xl: 1600, // extra large
  };

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