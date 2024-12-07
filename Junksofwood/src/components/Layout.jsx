import { Outlet, NavLink, useLocation} from "react-router-dom";
import FooterBar from './FooterBar';
import PromoBanner from "./PromoBanner";
import "../temp.css"
import { BsCart, BsCartFill } from "react-icons/bs";


const Layout = () => {

    const location = useLocation()
    console.log(location)

  return (
        <div className = "container">
            <PromoBanner />
            <header>
                <nav>
                    <div className ='nav-container' >
                        <ul>
                            <li>
                                <NavLink to="/" state="Hi">Home</NavLink>                
                            </li>
                            <li>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart"> <BsCart/> CART </NavLink>
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
