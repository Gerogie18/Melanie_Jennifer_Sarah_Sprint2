import { useNavigate } from 'react-router-dom';

const Shop = ({ products }) => {
  const navigate = useNavigate();
  const imagePath = './src/assets/productImages';

  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };

  return (
    <div>
      {products.map((product) => (
        <div className="img-container" key={product.id}>
          <h3>{product.name}</h3>
          <img 
            src={imagePath + product.images[0].filepath} 
            alt={product.images[0].alt} 
            onClick={() => handleProductClick(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;