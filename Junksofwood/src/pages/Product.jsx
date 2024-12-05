// This should display just one product.
// Right now ProductList sends to here, but maybe the Shop should?

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