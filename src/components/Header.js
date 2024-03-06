import Logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector( (store) => store.cart);
    return (
        <div className="bg-pink-50 shadow-md flex justify-around items-center p-2 mb-4">

            <Link to="/">
                <img data-testid="logo" src={Logo} alt="logo" className="w-32" />
            </Link>

            <ul className="flex">
                <li><Link to="/" className="mx-6 hover:font-semibold">Home</Link></li>
                <li><Link to="/about" className="mx-6 hover:font-semibold">About</Link></li>
                <li><Link to="/contact" className="mx-6 hover:font-semibold">Contact</Link></li>
                <li><Link to="/bigComponent" className="mx-6 hover:font-semibold">bigComponent</Link></li>
                <li><Link to="/cart" className="mx-6 hover:font-semibold cursor-pointer" data-testid="cart">Cart {cartItems.length}</Link></li>
            </ul>

        </div>
    );
}

export default Header;

