import { Outlet, Link } from "react-router-dom";
import FooterBar from '../components/FooterBar';
import HeaderBar from '../components/HeaderBar';

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
                    <Link to="/about">About</Link>
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
