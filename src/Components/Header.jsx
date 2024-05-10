import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { useContext } from "react";
import { CartContext } from "../App";

export const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className="navbar">
      <div className="logo">Mobile World</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={'/cart'}>View Cart{" "}
            <span><i className="fa-solid fa-cart-shopping"></i>{" "}{cart.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
