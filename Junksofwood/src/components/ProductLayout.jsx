//We can pass data to all the children (everything inside ProductLayout)
// we do this inside the "context"
import { useState } from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import CheckBox from './CheckBox.jsx';



const ProductLayout = ({categories}) => {

  const [searchParams, setSearchParams] = useSearchParams({cat: "", tags: []})
  const cat = searchParams.get("cat");
  const [num, setNum] = useState("1")

  const [checkedState, setCheckedState] = useState(
    categories.reduce((acc, category) => {
      acc[category.id] = false;
      return acc;
    }, {})
  );

  const handleNumChange = (event) => {
    setNum(event.target.value)
    console.log(`text was added ${num}`)
  }

  const handleTextChange = (event) => {
    let cat = event.target.value
    console.log(`text was added ${cat}`)
    setSearchParams({ cat: cat})
  }
  
  const handleCheckboxChange = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
        <h1>Shop</h1>
        <div className = "productNav">
        <p>We could turn this into a filter or buttons to select categories</p>
        {categories.map((category) => (

          <CheckBox 
            key={category.id} 
            checked={checkedState[category.id]} 
            text={category.title} 
            onClick={() =>(handleCheckboxChange(category.id))}/>
        ))}
        <input type="search" placeholder="Search" className="search-bar" value={cat} onChange={handleTextChange} />

        </div>
        <div>
            <Link to="/shop/1">Product 1</Link>
            <br/>
            <Link to="/shop/2">Product 2</Link>
            <br/>
            {/* <Link to={`/shop:${num}`}>Updateable Product. Number: {num}</Link> */}
        </div>
        <div>
            <Outlet context={{hello: "world"}}/>
        </div>
        <div>
          <p>Maybe we could turn this into a search box:</p>
          <input type="number" value={num} onChange={handleNumChange}></input>
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
