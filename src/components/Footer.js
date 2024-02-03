import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        <footer>
            <p>created by {user.name} - {user.email}</p>
        </footer>
    );
}

export default Footer;
