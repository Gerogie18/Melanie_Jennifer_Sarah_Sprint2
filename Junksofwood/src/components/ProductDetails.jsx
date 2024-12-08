import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5005/products/${productID}`);
        if (!res.ok) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        //navigate("/"); // redirect if the product is not found
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
}

export default ProductDetails;