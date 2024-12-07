//We can pass data to all the children (everything inside ProductLayout)
// we do this inside the "context"

import { Outlet, Link, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types'
import Button from './Button'
// import { useState } from "react"


const ProductLayout = ({categories}) => {
  const [searchParams, setSearchParams] = useSearchParams({n: "brooch"})
  const text = searchParams.get("n");

  const handleTextChange = (event) => {
    let id = event.target.value
    console.log(`text was added ${id}`)
    setSearchParams({ n: id})
  }
  
  function doStuff(){
    console.log("Button was clicked")
  };

  return (
    <>
        <h1>Shop</h1>
        <div className = "productNav">
        <p>We could turn this into a filter or buttons to select categories</p>
        {categories.map((category) => (

          <Button key={category.id} text={category.title} click={doStuff}/>
        ))}

        </div>
            {/* <Link to="/shop/1">Product 1</Link>
            <br/>
            <Link to="/shop/2">Product 2</Link>
            <br/>
            <Link to={`/shop/${number}`}>Updateable Product. Number: {number}</Link>
        </div> */}
        <div>
            <Outlet context={{hello: "world"}}/>
        </div>
        <div>
          <p>Maybe we could turn this into a search box:</p>
          <input type="text" value={text} onChange={handleTextChange}></input>
        </div>
    </>

  )
};

ProductLayout.propTypes = {
//  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onAdd: PropTypes.func.isRequired
};
export default ProductLayout;
