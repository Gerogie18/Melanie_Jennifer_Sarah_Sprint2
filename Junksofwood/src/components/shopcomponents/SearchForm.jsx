import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("q", searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1).toLowerCase());
    setSearchParams(currentParams);
    navigate(`/shop?${currentParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;