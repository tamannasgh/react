import { createContext } from "react";

const UserContext = createContext({user:{name:"dummy", email: "dummy@example.com"}});


export default UserContext;