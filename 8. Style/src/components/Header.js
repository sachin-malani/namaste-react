import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const status = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-24" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="p-2 m-2">Status: {status ? "🟢" : "🔴"}</li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
