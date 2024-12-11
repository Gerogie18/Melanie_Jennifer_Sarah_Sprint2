import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../utils/CartProvider';
import FooterBar from './FooterBar';
import PromoBanner from "./PromoBanner";
import "../temp.css"


const Layout = () => {
    const { cartIcon, cartLength } = useContext(CartContext);
    const location = useLocation()
    console.log(JSON.stringify(location, null, 2));

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
                            <NavLink to="/cart">
                                <span className="cart-icon">{cartIcon}</span>
                                {(cartLength > 0) && (
                                    <span className="cart-length">{cartLength}</span>)}
                                {" "} CART
                                </NavLink>
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
