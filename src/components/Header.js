import Logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar">

            <Link to="/">
                <img className="logo" src={Logo} alt="logo" />
            </Link>

            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/bigComponent">bigComponent</Link></li>
                <li>Cart</li>
            </ul>

        </div>
    );
}

export default Header;

