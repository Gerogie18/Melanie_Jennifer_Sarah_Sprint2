//We can pass data to all the children (everything inside ProductLayout)
// we do this inside the "context"

import { Outlet, Link } from "react-router-dom";


const ProductLayout = () => {
  return (
    <>
        <h1>Shop</h1>
        <div className = "productNav">
            <Link to="/product/1">Product 1</Link>
            <br/>
            <Link to="/product/2">Product 2</Link>
        </div>
        <div>
            <Outlet context={{hello: "world"}}/>
        </div>
    </>

  )
};

export default ProductLayout;
