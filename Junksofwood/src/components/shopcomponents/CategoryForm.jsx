import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect } from "react";



function CategoryForm({ categoryId, label, allCategoryIDs }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const catParam = searchParams.get("cat");
  const currentCategories = catParam ? catParam.split(",") : [];

  // This function handles the change event for the category checkbox
  const handleCheckboxChange = (event) => {
    let newCategories;
    if (event.target.checked) {
      newCategories = [...currentCategories, categoryId];
    } else {
      newCategories = currentCategories.filter(cat => cat !== categoryId);
    }
    searchParams.set("cat", newCategories.join(","));
    navigate(`?${searchParams.toString()}`);
  }

  useEffect(() => {

    // if (!currentCategories.includes(categoryId)) {
    //   currentCategories.push(categoryId);
    //   searchParams.set("cat", currentCategories.join(","));
    //   setSearchParams(searchParams);
    if (currentCategories.length === 0) {
      // Assuming categories is an array of all category IDs
      //const allCategories = allCategoryIDs.map(category => category.id);
      searchParams.set("cat", allCategoryIDs.join(","));
      setSearchParams(searchParams);
    }
  }, []);

  return (
    <div key={`cat-cbform${categoryId}`}>
      <label htmlFor={categoryId}>{label}</label>
      <input
        type="checkbox"
        id={categoryId}
        name={categoryId}
        onChange={handleCheckboxChange}
        checked={searchParams.get("cat")?.split(",").includes(categoryId)}
      />
    </div>
  );
}

CategoryForm.propTypes = {
  categoryId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  allCategoryIDs: PropTypes.array.isRequired,
};

export default CategoryForm;