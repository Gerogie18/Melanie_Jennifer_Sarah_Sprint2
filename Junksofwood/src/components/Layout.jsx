import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState,useContext, useEffect } from "react";
import { CartContext } from '../utils/CartProvider';
import FooterBar from './FooterBar';
import PromoBanner from "./PromoBanner";
import "../temp.css"
import { BsCart, BsCartFill } from "react-icons/bs";


const Layout = () => {
    const { cart } = useContext(CartContext);
    const cartisEmpty = cart.length === 0;
    const [cartIcon, setCartIcon] = useState({cartisEmpty} ? <BsCart /> : <BsCartFill />)
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        (cartisEmpty ? console.log("Cart is Empty") : console.log("Cart is not Empty"))
        setCartIcon(cartisEmpty ? <BsCart /> : <BsCartFill />)
    }, [cartisEmpty])

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
