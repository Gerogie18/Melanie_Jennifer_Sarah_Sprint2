//This is from Noman's code; I just changed Task to Product. 
// The App.jsx would need to look something like this. 


import ProductList from "../pages/ProductList";
import { useState, useEffect } from "react";
// import Test1 from "./Test1";
// import Test2 from "./Test2";
// import Test3 from "./Test3";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import About from "./About";
import ProductDetails from "./ProductDetails";

function AppRoutes () {
  const [productList, setProductList] = useState([]);
  const location = useLocation();


    // Put the products fetched from the server in a products array...
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();

      setProductList(productsFromServer);
    };
    getProducts();
  }, []);

  // fetch the products from server...
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };

  // fetch ONE Product from Product from the server...

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
  };

  // TO delete a Product from Products...
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    // update our UI
    setProductList(productList.filter((product) => product.id !== id));
  };

  // TO toggle the reminder of each product...
  const toggleReminder = async (id) => {
    const productToToggle = await fetchProduct(id);
    const updProduct = { ...productToToggle, reminder: !productToToggle.reminder };

    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updProduct),
    });

    const data = await res.json();
    setProductList(
      productList.map((product) =>
        // product.id === id ? { ...product, reminder: !product.reminder } : product
        product.id === id ? { ...product, reminder: data.reminder } : product
      )
    );
  };

  return (
    <Router>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              {productList.length > 0 ? (
                <ProductList
                  products={productList}
                  onDelete={deleteProduct}
                  onToggle={toggleReminder}
                />
              ) : (
                "No products to show!!!"
              )}
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;