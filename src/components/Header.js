// Way to use named exports and imports
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
        <div className="logo-container">
          <img className="logo"
          src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li><button onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button></li>
          </ul>
        </div>
    </div>
  );
};
export default Header;