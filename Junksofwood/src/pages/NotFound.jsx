import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// This will navigate back one
  function NotFound () {
    const navigate  = useNavigate()
  
    useEffect(() => {
      setTimeout(() => {
        navigate(-1, {state : "Error Not Page"})
      }, 3000)
    }, [])
  
      return <h1>Page not found. Redirecting to last page.</h1>;
    };
    
    export default NotFound;


  // function NotFound () {
  
  //     return <h1>404. Page not found.</h1>;
  //   };
    
  //   export default NotFound;