
import PropTypes from 'prop-types';

function ProductCard({ product, onClick }) {

    const imagePath = '/assets/productimages';

    return (
        <div className="img-container">
            <h3>{product.name}</h3>
            <div className="img">
                <img
                    src={imagePath + product.images[0].filepath}
                    alt={product.images[0].alt}
                    onClick={onClick} />
            </div>
      </div>
    );
}    
    ProductCard.propTypes = {
      product: PropTypes.object.isRequired,
      onClick: PropTypes.func.isRequired,
    };

export default ProductCard