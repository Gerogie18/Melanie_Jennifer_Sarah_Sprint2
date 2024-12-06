// This needs to look a little like the componant I called "delete" 
// We need the state variables and functions defined here 
// and then passed as props to different components. TO MAKE THEM GLOBAL...
// We also need to routing (mostly done here)


// Here are the functions we need: 
// A mock server using JSON Server is implemented to handle data interactions. This fake API simulates the following endpoints:
// · GET /products - Fetches the list of products.
// · GET /products/:id - Fetches details for a specific product.
// · POST /cart - Adds a product to the cart.
// · GET /cart - Retrieves items in the cart.
// · DELETE /cart/:id - Removes a product from the cart.


import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import ProductLayout from "./components/ProductLayout";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ProductLayout />} >
            <Route index element={<ProductList />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
