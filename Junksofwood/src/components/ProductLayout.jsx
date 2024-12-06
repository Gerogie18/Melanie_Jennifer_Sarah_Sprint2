//We can pass data to all the children (everything inside ProductLayout)
// we do this inside the "context"

import { Outlet, Link, useSearchParams } from "react-router-dom";
// import { useState } from "react"


// const ProductLayout = () => {
//   const [number, setNumber] = useState(3);

//   const handleNumberChange = (event) => {
//     let number = event.target.value
//     setNumber(number)}
  

//   return (
//     <>
//         <h1>Shop</h1>
//         <div className = "productNav">
//             <Link to="/product/1">Product 1</Link>
//             <br/>
//             <Link to="/product/2">Product 2</Link>
//             <br/>
//             <Link to={`/product/${number}`}>Updateable Product. Number: {number}</Link>
//         </div>
//         <div>
//             <Outlet context={{hello: "world"}}/>
//         </div>
//         <div>
//           <p>If you change this number, you will change the product link</p>
//           <input type="number" value={number} onChange={handleNumberChange}></input>
//         </div>
//     </>

//   )
// };


const ProductLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({n: 3})
  const number = searchParams.get("n");

  const handleNumberChange = (event) => {
    let num = event.target.value
    setSearchParams({ n: num})
  }
  

  return (
    <>
        <h1>Shop</h1>
        <div className = "productNav">
            <Link to="/shop/1">Product 1</Link>
            <br/>
            <Link to="/shop/2">Product 2</Link>
            <br/>
            <Link to={`/shop/${number}`}>Updateable Product. Number: {number}</Link>
        </div>
        <div>
            <Outlet context={{hello: "world"}}/>
        </div>
        <div>
          <p>If you change this number, you will change the product link</p>
          <input type="number" value={number} onChange={handleNumberChange}></input>
        </div>
    </>

  )
};
export default ProductLayout;
