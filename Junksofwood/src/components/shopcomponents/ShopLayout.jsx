
import { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import SearchForm from "./SearchForm";
import CategoryForm from "./CategoryForm";

function ShopLayout({ categories, products }) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const catIDs = categories.map(category => category.id);
    catIDs.forEach(catID => {
      searchParams.append('category', catID);
    });
    setSearchParams(searchParams);
  }, []);



  return (
    <>
      <h1>Shop</h1>
      <div className="categorySelection">
        <h4>categories</h4>
        {categories.map((category) => (
          <CategoryForm
            key={`cat_cb${category.id}`}
            categoryId={category.id}
            label={category.title} />
        ))}
      </div>
      <SearchForm />
      <div>
        <Outlet context={{ products }} />
      </div>
    </>
  );
}



ShopLayout.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default ShopLayout;