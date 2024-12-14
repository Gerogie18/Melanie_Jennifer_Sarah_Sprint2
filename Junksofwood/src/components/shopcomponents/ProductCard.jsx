
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const imagePath = '/assets/thumbnails/';
    const imageSuffix = '_thumbnail.jpg'

    const getFileName = (filename) => {
        return filename.substring(0, filename.lastIndexOf('.'));
    };

    const handleProductClick = (productId) => {
        navigate(`/shop/product/${productId}`);
    };

    return (
        <div className="product-container">
            <h3>{product.name}</h3>
            <div className="img">
                <img
                    src={imagePath + getFileName(product.images[0].filepath) + imageSuffix}
                    alt={product.images[0].alt}
                    onClick={() => handleProductClick(product.id)} />
            </div>
        </div>
    );
}    
    ProductCard.propTypes = {
      product: PropTypes.object.isRequired
    };

export default ProductCard