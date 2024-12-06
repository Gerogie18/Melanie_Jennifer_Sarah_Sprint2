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

import { useState, useEffect } from "react"
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

  const [productList, setProductList] = useState([])
  const [addedProducts, setAddedProducts] = useState(null); // Track products added to cart

    // Put the products fetched from the server in a products array...
    useEffect(() => {
      const getProducts = async () => {
        const productsFromServer = await fetchProducts();
  
        setProductList(productsFromServer);
        console.log(productList)
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
  
    // const fetchProduct = async (id) => {
    //   const res = await fetch(`http://localhost:5000/products/${id}`);
    //   const data = await res.json();
    //   return data;
    // };
  

//  Add / Delete products from cart (This should be moved to the shop maybe?)
//  Delete Product from cart
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5500/cart/${id}`, {
      method: "DELETE",
    });
    setAddedProducts(addedProducts.filter((product) => product.id !== id));
  };

//  Add product to cart
//  Needs to be fixed because it will rewrite the whole cart
  const addProduct = (product) => {
    setAddedProducts(product);
  };


  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ProductLayout />} >
            <Route index element={<ProductList products={ProductList} onDelete={deleteProduct} onAdd={addProduct} />} />
            <Route path=":id" element={<Product />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart cartItems={addedProducts} onDelete={deleteProduct} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
