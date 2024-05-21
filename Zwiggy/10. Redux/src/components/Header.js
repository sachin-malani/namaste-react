import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const status = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); //Subscribing to the store using a Selector

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
          <li className="p-2 m-2">
            <Link to="/cart">
              <img
                width="22"
                height="22"
                className="inline"
                src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
              <span>{cartItems.length ? cartItems.length : null}</span>
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-2 m-2 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
