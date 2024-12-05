import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  )
}

export default App
