// This is mostly what was in Noman's class with tasks changed to products
// It could be a good reference point for the ProductDetails page

// Need to fix URLS
// Need to update what the product things are (right now it's day and text)



import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";


const ProductDetails = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/products/${params.id}`);

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
          <p style={{ color: "black", textDecoration: "underline" }}>
            {pathname}
          </p>
          <h3>{product.text}</h3>
          <p>{product.day}</p>
           <Button
            text="Go Back"
            click={() => {navigate(-1);}}
          /> 
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
