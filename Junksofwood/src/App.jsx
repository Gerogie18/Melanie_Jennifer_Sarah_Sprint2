
// Here are the functions we need: 
// A mock server using JSON Server is implemented to handle data interactions. This fake API simulates the following endpoints:
// · GET /products - Fetches the list of products.
// · GET /products/:id - Fetches details for a specific product.
// · POST /cart - Adds a product to the cart.
// · GET /cart - Retrieves items in the cart.
// · DELETE /cart/:id - Removes a product from the cart.

import { useState, useEffect, useContext } from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import BreakpointProvider from "./utils/BreakpointProvider.jsx";
import { CartProvider, CartContext } from './utils/CartProvider';
import Layout from "./components/Layout"
import Home from "./pages/Home";
import ProductLayout from "./components/ProductLayout";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import CategoryDetails from "./components/CategoryDetails";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

function App() {

  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { fetchCart } = useContext(CartContext);

    // Put the products fetched from the server in a products array...
    useEffect(() => {
      fetchCart()
      const getData = async () => {
        const productsFromServer = await fetchProducts();
        const categoriesFromServer = await fetchCategories();
        setProducts(productsFromServer);
        setCategories(categoriesFromServer);
      };
      getData();
    }, []);
  
    // fetch the products from server...
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5005/products");
      const data = await res.json();
      return data;
    };
  

//    fetch product categories from server...
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:5005/categories");
      const data = await res.json();
      return data;
    };  


  return (
    <BreakpointProvider>
     <CartProvider>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ProductLayout categories={categories} products={products}/>} >
            <Route index element={<Shop products={products}/>} />
            <Route path=":productID" element={<ProductDetails/>} />
            <Route path=":categoryID" element={<CategoryDetails/>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </CartProvider>
    </BreakpointProvider>
  )
}

export default App
