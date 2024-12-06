// Right now I have manually entered two products, product 1 & product 2
// We need to set it up so the id can change as the user selects a product


// 1. Product Listing Page:
// o Displays a grid or list of products fetched from a mock API.
// o Each product includes an image, name, price, and a "View Details" or "Add to Cart" button.



//import {useState} from 'react'


// function ProductList({ products, onDelete, onToggle}){
const ProductList = () => {

//    const [id, setID] = useState();



    return (<div>
        <p>This is a list of products.</p>
        <p>It might be the same as the store?</p>
        <p> Or maybe we can make it a componet that filters by categories? I dunno. </p>

        </div>);
  };
  
  export default ProductList;

//We can select and unselect (delete?) products from the product list 

// import Product from "./Product";
// const ProductList = ({ products, onToggle }) => {
//   return (
//     <>
//       {products.map((product) => (
//         // <h3 key={product.id}>{product.text}</h3>
//         <Product
//           key={product.id}
//           product={product}
//           onToggle={onToggle}
//         />
//       ))}
//     </>
//   );
// };

// export default Tasks;