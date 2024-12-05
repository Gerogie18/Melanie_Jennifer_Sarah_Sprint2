// import { Navigate } from "react-router-dom"

// const NotFound = () => {
//     return <Navigate to="/" />;
//   };
  
//   export default NotFound;

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


//reminder: useEffect hook means "perform this side code"
// useEffect(() => {THING THAT I WANT IT TO DO}, [WHEN I WANT IT TO DO IT])



//This will navigagte to home:
// function NotFound () {
//   const navigate  = useNavigate()

//   useEffect(() => {
//     setTimeout(() => {
//       navigate("/", {state : "Error Not Page"})
//     }, 1000)
//   }, [])

//     return <h1>Page not found. Redirecting to home page.</h1>;
//   };
  
//   export default NotFound;


// This will navigate back one
  function NotFound () {
    const navigate  = useNavigate()
  
    useEffect(() => {
      setTimeout(() => {
        navigate(-1, {state : "Error Not Page"})
      }, 1000)
    }, [])
  
      return <h1>Page not found. Redirecting to last page.</h1>;
    };
    
    export default NotFound;