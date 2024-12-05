import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
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
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<ProductLayout />} >
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
