import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const imagePath = '/assets/thumbnails/';
    const imageSuffix = '_thumbnail.jpg';

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
                // change made to prevent whitescreen
                {product.images && product.images.length > 0 ? (
                    <img
                        src={
                            imagePath +
                            getFileName(product.images[0].filepath) +
                            imageSuffix
                        }
                        alt={product.images[0].alt}
                        onClick={() => handleProductClick(product.id)}
                    />
                ) : (
                    <p>No image available</p>
                )}
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                filepath: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
};

export default ProductCard;