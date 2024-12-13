import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect } from "react";



function CategoryForm({ categoryId, label }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // This function handles the change event for the category checkbox
  const handleCheckboxChange = (event) => {
    const catParam = searchParams.get("cat");
    const currentCategories = catParam ? catParam.split(",") : [];
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
    const catParam = searchParams.get("cat");
    const currentCategories = catParam ? catParam.split(",") : [];
    if (!currentCategories.includes(categoryId)) {
      currentCategories.push(categoryId);
      searchParams.set("cat", currentCategories.join(","));
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
};

export default CategoryForm;