
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
import { CartContext } from './utils/CartProvider';
import Layout from "./components/Layout"
import Home from "./pages/Home";
import ShopLayout from "./components/shopcomponents/ShopLayout";
import Shop from "./pages/Shop";
import ProductDetails from "./components/shopcomponents/ProductDetails";
import CategoryDetails from "./components/shopcomponents/CategoryDetails";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import CheckoutFinal from "./components/checkoutcomponents/CheckoutFinal";
import NotFound from "./pages/NotFound";


function App() {

  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { fetchCart } = useContext(CartContext);

    // Put the products fetched from the server in a products array...
    useEffect(() => {
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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/" element={<ShopLayout categories={categories} products={products}/>}>
            {/* <Route index element={<Shop />} /> */}
          </Route>
          <Route path="category/:categoryID" element={<CategoryDetails products={products}/>} />
          <Route path="product/:productID" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
            <Route path="purchasecomplete" element={<CheckoutFinal/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BreakpointProvider>
  );
}

export default App
