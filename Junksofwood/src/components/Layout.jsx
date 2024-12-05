import { Outlet, Link } from "react-router-dom";
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

const Layout = () => {
  return (
    <div className = "container">
        <HeaderBar />
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/cart">CART BUTTON</Link>
                </li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
        <FooterBar />
    </div>
  )
};

export default Layout;
