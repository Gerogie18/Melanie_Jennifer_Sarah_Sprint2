import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from '../utils/CartProvider';
import FooterBar from './FooterBar';
import PromoBanner from "./PromoBanner";
import "../temp.css"
import { BsCart, BsCartFill } from "react-icons/bs";


const Layout = () => {
    const { cart } = useContext(CartContext);
    const cartisEmpty = cart.length === 0;
    const cartIcon = {cartisEmpty} ? <BsCart /> : <BsCartFill />
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        if (cart.length === 0) {
          console.log("Cart is empty");
        } else {
          console.log("Cart is not empty");
        }
      }, [cart]);

  return (
        <div className = "container">
            <PromoBanner />
            <header>
                <nav>
                    <div className ='nav-container' >
                        <ul>
                            <li>
                                {/* <NavLink style={({ isActive }) => { return isActive ? {color: "red"} : {}} } to="/">Home</NavLink> */}
                                <NavLink to="/" state="Hi">Home</NavLink>                
                            </li>
                            <li>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart"> {cartIcon} CART </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <FooterBar />
        </div>
  )
};

export default Layout;
