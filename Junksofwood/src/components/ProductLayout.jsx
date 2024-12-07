//We can pass data to all the children (everything inside ProductLayout)
// we do this inside the "context"
import { useState } from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import CheckBox from './CheckBox.jsx';
// import { useState } from "react"


const ProductLayout = ({categories}) => {
  const [searchParams, setSearchParams] = useSearchParams({n: ""})
  const text = searchParams.get("n");
  const [checked, setchecked] = useState(false) 

  const handleTextChange = (event) => {
    let id = event.target.value
    console.log(`text was added ${id}`)
    setSearchParams({ n: id})
  }
  
  function doStuff(){
    console.log("Button was clicked")
    setchecked(!checked)
  };

  return (
    <>
        <h1>Shop</h1>
        <div className = "productNav">
        <p>We could turn this into a filter or buttons to select categories</p>
        {categories.map((category) => (

          <CheckBox key={category.id} checked={checked} text={category.title} onClick={doStuff}/>
        ))}
        <input type="search" placeholder="Search" className="search-bar" value={text} onChange={handleTextChange} />

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
