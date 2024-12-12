import { useEffect, useState } from "react";
import { useOutletContext, Outlet, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import SearchForm from "./SearchForm";
import CategoryForm from "./CategoryForm";

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
    <>
    <div id="shop-header"> 
      <h1>Shop</h1>
    </div>
    <div id="shop-sidebar">
      <h2>Filter</h2>
      <div id = "category-options">
        <h3>Categories</h3>

        {categories.map(category => (
          <CategoryForm key={category.id} categoryId={category.id} label={category.title} />
        ))}
      </div>
      <div>
        <SearchForm />
      </div>
      <Outlet context={{ filteredProducts }} />
    </div>
    </>
  );
}

ShopLayout.propTypes = {
  categories: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default ShopLayout;