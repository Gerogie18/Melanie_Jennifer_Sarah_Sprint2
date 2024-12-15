import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import SearchForm from "./SearchForm";
import CategoryForm from "./CategoryForm";
import Shop from '../../pages/Shop'

/**
 * Filters the products based on desired categories and tags.
 * 
 * @param {Array} products - The list of products to filter.
 * @param {Array} desiredCategories - The categories to filter by.
 * @param {Array} desiredTags - The tags to filter by.
 * @param {Function} setFilteredProducts - The function to set the filtered products.
 */
function filterProducts(products, desiredCategories, desiredTags = [], searchQuery, setFilteredProducts) {
  const newProducts = products.filter(product =>
    desiredCategories.includes(product.category) &&
    (desiredTags.length === 0 || product.tags.some(tag => desiredTags.includes(tag))) &&
    (searchQuery === "" || product.tags.some(tag => tag.includes(searchQuery)))
  );
  setFilteredProducts(newProducts);
}

function ShopLayout({ categories, products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [desiredCategories, setDesiredCategories] = useState([]);
  const [desiredTags, setDesiredTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const allCategoryIDs = categories.map(category => category.id);

  useEffect(() => {
    const categoryParam = searchParams.get('cat');
    const tagParam = searchParams.get('tag');
    const categories = categoryParam ? categoryParam.split(',') : [];
    const tags = tagParam ? tagParam.split(',') : [];
    const query = searchParams.get("q") || "";

    setDesiredCategories(categories);
    setDesiredTags(tags);
    setSearchQuery(query);

    filterProducts(products, categories, tags, query, setFilteredProducts);
  }, [searchParams, products]);

  return (
    <section id="shop">
      <div id="shop-header"> 
        <h1>Shop</h1>
      </div>
      <div id="shop-container" className="shop-container">
        <div id="shop-sidebar" className="shop-sidebar">
          <h2>Filter by</h2>
          <div id="category-options">
            {categories.map(category => (
              <CategoryForm key={category.id} categoryId={category.id} label={category.title} allCategoryIDs={allCategoryIDs}/>
            ))}
          </div>
          <div id='SearchForm'>
            <SearchForm />
          </div>
        </div>
        <div id="shop-contents" className="shop-contents">
          <Shop filteredProducts={filteredProducts}/>
        </div>
      </div>
    </section>
  );
}

ShopLayout.propTypes = {
  categories: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default ShopLayout;