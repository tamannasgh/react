import Logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="logo" />

            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

        </div>
    );
}

export default Header;

