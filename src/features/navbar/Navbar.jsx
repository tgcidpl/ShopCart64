import React from "react";
import cartIcon from "../../assets/cartIcon.svg";
import { useDispatch } from "react-redux";
import { toggleCartOpen } from "./navbarSlice";

export function Navbar() {
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch(toggleCartOpen());
  };

  return (
    <div className="navbackground">
      <nav className="navbar container">
        <div className="navbar-logo">ShopCart 64</div>
        <button onClick={handleToggleCart} className="navbar-cartButton">
          <img src={cartIcon} className="navbar-cartButton__icon" />
        </button>
      </nav>
    </div>
  );
}
