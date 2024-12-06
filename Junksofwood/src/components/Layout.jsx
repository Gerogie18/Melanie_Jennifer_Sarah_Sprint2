import { Outlet, NavLink, useLocation} from "react-router-dom";
import FooterBar from './FooterBar';
import PromoBanner from "./PromoBanner";
import "../temp.css"


const Layout = () => {

    const location = useLocation()
    console.log(location)

  return (
    <div className = "container">
        <PromoBanner />
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
                        <NavLink to="/cart">CART BUTTON</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <main>
            <Outlet />
        </main>
        <FooterBar />
    </div>
  )
};

export default Layout;
