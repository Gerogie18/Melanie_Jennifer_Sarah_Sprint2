// A page for local testing <3

import { useContext } from "react";
import { BreakpointContext } from "../utils/BreakpointProvider";
const Test = () => {
    const { breakpoint } = useContext(BreakpointContext);
    return (
      <div>
        {breakpoint === 'xs' && <h1>extra small</h1>}
        {breakpoint === 'sm' && <h1>small</h1>}
        {breakpoint === 'md' && <h1>medium</h1>}
        {breakpoint === 'lg' && <h1>large</h1>}
        {breakpoint === 'xl' && <h1>extra large</h1>}
        
        <h1>This is a test page</h1>
      </div>
    )
  }


export default Test;