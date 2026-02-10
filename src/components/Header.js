// Way to use named exports and imports
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus(); // Custom Hook to track online/offline status of the user. 
  // Hook is called as like normal JS function but it has some special rules to follow.
  // 1. Hooks can only be called at the top level of a component or a custom Hook.
  // 2. Hooks can only be called from React function components or custom Hooks.

  return (
    <div className="flex justify-between m-2.5 border border-solid border-black">
        <div className="logo-container">
          <img className="w-25 h-25"
          src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items-container flex gap-5 list-none mr-5 items-center self-center content-center">
          <ul className="flex gap-5 list-none mr-5 items-center self-center content-center">
            <li className="font-bold">
              {isOnline ? "Online🟢" : "Offline🔴"}
            </li>
            <li className="cursor-pointer decoration-underline hover:text-blue-500 hover:decoration-none">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer decoration-underline hover:text-blue-500 hover:decoration-none">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer decoration-underline hover:text-blue-500 hover:decoration-none">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer decoration-underline hover:text-blue-500 hover:decoration-none">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="cursor-pointer decoration-underline hover:text-blue-500 hover:decoration-none font-bold">
              <button onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </li>
          </ul>
        </div>
    </div>
  );
};
export default Header;