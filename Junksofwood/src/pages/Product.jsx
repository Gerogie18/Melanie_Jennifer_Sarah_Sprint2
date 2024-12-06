// 2. Product Details Page:
// o Provides detailed information about a selected product, including:
    // § Larger product image
    // § Description
    // § Price
    // § Available quantity
// o Option to add the product to the cart.

//import { object } from "prop-types";
import { useOutletContext, useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams()
    const obj = useOutletContext()

    return (
        <>
            <h2>Product {id}</h2>
            <p>Testing outlet context: {obj.hello}</p>
        </>
    );
  };
  
  export default Product;




//   const Product = ({ product, onToggle }) => {
//     return (
//       <div
//         className={`product ${product.slected ? "selected" : ""}`}
//         onDoubleClick={() => onToggle(product.id)}}
//       >
//         <h3>
//           {product.text}
//         </h3>
//         <p>
//           {" "}
//           <Link to={`/product/${product.id}`}>View Details</Link>
//         </p>
//       </div>
//     );
//   };