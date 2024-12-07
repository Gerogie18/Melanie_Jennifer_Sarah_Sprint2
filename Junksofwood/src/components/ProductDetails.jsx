// we can probably update this with deleteTaskDetails as a reference. 


// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Button from "./Button";





import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";


function ProductDetails ({productID}) {

  const { pathname } = useLocation();
  // const params = useParams();
  // const { productID } = params;


  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5005/products/${productID}`);

      if (res.status === 404) {
        setError("Product not found");
      }

      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  });

  if (error) {
    navigate("/");
  }
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="product detail">
          <p>
            {pathname}
          </p>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
           <Button
            text="Go Back"
            click={() => {navigate(-1);}}
          /> 
        </div>
      )}
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

