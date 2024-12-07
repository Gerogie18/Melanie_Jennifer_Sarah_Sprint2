// we can probably update this with deleteTaskDetails as a reference. 


// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Button from "./Button";





import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import Button from "./Button";


function ProductDetails () {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5005/shop/${productID}`);
        if (res.status === 404) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        // navigate(-1); // redirect if the product is not found
      }
    };
  

    fetchProduct();
  }, [productID, navigate]);

  return (
    <div>
      {loading ? <h3>Loading...</h3> : (
        <div className="product-detail">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};


// let prod = {
//     "name": "Canada Brooch",
//     "category": "0",
//     "price": 10,
//     "description": "",
//     "size": "",
//     "tags": [
//       "Brooch",
//       "Wood",
//       "Canada",
//       "Hockey",
//       "Sport"
//     ],
//     "images": [
//       {
//         "title": "Canada Brooch - Card",
//         "filepath": "/brooches/CanadaBroochCard.jpg",
//         "alt": "Image of Canada Brooch on card"
//       },
//       {
//         "title": "Canada Brooch - Plate",
//         "filepath": "/brooches/CanadaBroochPlate.jpg",
//         "alt": "Image of Canada Brooch - Plate"
//       }
//     ],
//   }


export default ProductDetails;

